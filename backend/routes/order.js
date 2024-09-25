const express = require('express');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();

// Define your routes
router.route('/').post(createOrder);  // This matches '/api/v1/orders'

module.exports = router;  // Export the router correctly
