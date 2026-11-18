# Intro to Backend Development

This project is created as part of the **Introduction to Backend Development** tutorial and assignment.

It demonstrates the basic implementation of a backend application using Node.js, Express.js, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman

## Features

- Express server setup
- MongoDB database connection
- User registration API
- Retrieve all users
- Create, retrieve, update, and delete posts
- MongoDB models and schemas
- Separate routes and controllers
- REST API testing using Postman

## Project Structure

```text
intro-to-backend-development/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── post.model.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── post.controller.js
│   │
│   ├── routes/
│   │   ├── user.routes.js
│   │   └── post.routes.js
│   │
│   ├── app.js
│   └── index.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/sharmaparth2502/intro-to-backend-development.git
```

2. Navigate to the project folder:

```bash
cd intro-to-backend-development
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

Replace the connection string with your MongoDB connection URI.

5. Start the server:

```bash
node src/index.js
```

The server runs on:

```text
http://localhost:8000
```

## API Endpoints

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new user |
| GET | `/api/users` | Retrieve all users |

### Post APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a new post |
| GET | `/api/posts` | Retrieve all posts |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

## Testing

The APIs were tested using Postman.

The following operations were tested:

- User registration
- Retrieving users
- Creating posts
- Retrieving posts
- Updating posts
- Deleting posts

## Database

MongoDB is used to store user and post information.

Mongoose is used for defining schemas, creating models, and interacting with the database.

## Note

This project is developed for learning and demonstrating fundamental backend development concepts. It is a basic backend implementation and is not intended to be used as a production-ready application.