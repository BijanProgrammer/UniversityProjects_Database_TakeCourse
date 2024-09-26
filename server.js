const express = require('express');
const cors = require('cors');

// Routes
const students = require('./routes/api/students');

const app = express();
app.use(express.json());
app.use(cors());

// Use Routes
app.use('/api/students', students);

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started on Port ${port}`));
