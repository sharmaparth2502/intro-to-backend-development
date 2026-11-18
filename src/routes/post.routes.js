const express = require('express');
const router = express.Router();

const {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
} = require('../controllers/post.controller');

router.post('/', createPost);
router.get('/', getAllPosts);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;