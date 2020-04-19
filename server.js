const express = require('express');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/items', items);

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started on Port ${port}`));
