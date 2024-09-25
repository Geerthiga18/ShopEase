const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Body parser middleware to handle JSON requests
app.use(express.json());

// Import routes
const products = require('./routes/product');
const orders = require('./routes/order');


connectDatabase();


// Use routes
app.use(express.json())
app.use('/api/v1/products', products);  // Matches '/api/v1/products'
app.use('/api/v1/orders', orders);      // Matches '/api/v1/orders'

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
