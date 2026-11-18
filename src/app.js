const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send("Backend server is running!");
});

module.exports = app;
