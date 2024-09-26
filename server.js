const express = require('express');

// Routes
const students = require('./routes/api/students');

const app = express();

// Body Parser Middleware
app.use(express.json());

// Use Routes
app.use('/api/students', students);

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started on Port ${port}`));
