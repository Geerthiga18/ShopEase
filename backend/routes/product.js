const express = require('express');
const { getProducts, getSingleProducts } = require('../controllers/productController');
const router = express.Router();

// Define your routes
router.route('/').get(getProducts);  // This matches '/api/v1/products'
router.route('/:id').get(getSingleProducts);  // This matches '/api/v1/products/:id'

module.exports = router;  // Export the router correctly
