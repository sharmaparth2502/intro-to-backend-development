const Post = require('../models/post.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');

// Handle database errors
const handlePostError = (res, error, action) => {
    console.error(`${action} error:`, error);

    if (error.name === 'ValidationError') {
        return res.status(400).json({
            message: "Invalid post data"
        });
    }

    if (error.name === 'CastError') {
        return res.status(400).json({
            message: "Invalid data format"
        });
    }

    if (error.code === 11000) {
        return res.status(409).json({
            message: "Duplicate data"
        });
    }

    return res.status(500).json({
        message: "Internal server error"
    });
};

// Create a new post
const createPost = async (req, res) => {
    try {
        const { title, content, owner } = req.body || {};

        // Validate input
        if (!title || !content || !owner) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (
            typeof title !== 'string' ||
            typeof content !== 'string' ||
            typeof owner !== 'string'
        ) {
            return res.status(400).json({
                message: "Invalid input format"
            });
        }

        if (!title.trim() || !content.trim()) {
            return res.status(400).json({
                message: "Title and content cannot be empty"
            });
        }

        if (!mongoose.Types.ObjectId.isValid(owner)) {
            return res.status(400).json({
                message: "Invalid owner ID"
            });
        }

        const existingUser = await User.findById(owner);

        if (!existingUser) {
            return res.status(404).json({
                message: "Owner not found"
            });
        }

        const post = await Post.create({
            title: title.trim(),
            content: content.trim(),
            owner
        });

        res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        return handlePostError(res, error, "Create post");
    }
};

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('owner', 'username email');

        res.status(200).json({
            posts
        });

    } catch (error) {
        return handlePostError(res, error, "Get posts");
    }
};

// Update a post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body || {};

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        if (title === undefined && content === undefined) {
            return res.status(400).json({
                message: "At least one field is required to update"
            });
        }

        const updateData = {};

        if (title !== undefined) {
            if (typeof title !== 'string' || !title.trim()) {
                return res.status(400).json({
                    message: "Title cannot be empty"
                });
            }

            updateData.title = title.trim();
        }

        if (content !== undefined) {
            if (typeof content !== 'string' || !content.trim()) {
                return res.status(400).json({
                    message: "Content cannot be empty"
                });
            }

            updateData.content = content.trim();
        }

        const post = await Post.findByIdAndUpdate(
            id,
            updateData,
            { returnDocument: 'after', runValidators: true }
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post updated successfully",
            post
        });

    } catch (error) {
        return handlePostError(res, error, "Update post");
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid post ID"
            });
        }

        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully"
        });

    } catch (error) {
        return handlePostError(res, error, "Delete post");
    }
};

module.exports = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
};
