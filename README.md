# Intro to Backend Development

This project is created as part of the **Introduction to Backend Development** tutorial and assignment.

It demonstrates the implementation of a backend application using Node.js, Express.js, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- bcryptjs
- Postman

## Features

- Express server setup
- MongoDB database connection
- User registration API
- Password hashing using bcryptjs
- Input validation for user registration
- Duplicate email protection
- Password protection in API responses
- Retrieve all users
- Create, retrieve, update, and delete posts
- Post owner validation
- Post input validation
- Centralized error handling in Post APIs
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
├── .env.example
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

4. Create a `.env` file in the root directory using `.env.example` as a reference:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection URI. Keep actual credentials in `.env` and never upload them to GitHub.

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

## Security and Validation

- User passwords are hashed using bcryptjs before being stored in MongoDB.
- Passwords are excluded from user API responses.
- User registration validates required fields, email format, and password length.
- Duplicate email registration is prevented.
- Post creation validates required fields and owner IDs.
- Post updates allow changes only to title and content.
- Database errors are handled with appropriate HTTP status codes.
- Environment variables and sensitive configuration files are excluded from Git tracking.

## Testing

The APIs were tested using Postman.

The following operations and validation cases were tested:

- User registration
- Retrieving users without exposing passwords
- Invalid email validation
- Password length validation
- Duplicate email protection
- Creating posts
- Retrieving posts with populated owner details
- Updating posts
- Deleting posts
- Invalid and non-existent owner ID validation
- Invalid post ID validation
- Missing request body handling

## Database

MongoDB is used to store user and post information.

Mongoose is used for defining schemas, creating models, and interacting with the database.

## Note

This project is developed as part of a backend development tutorial and assignment. It demonstrates basic backend functionality along with input validation and security improvements. Authentication and authorization features are not implemented.