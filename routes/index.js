// Import modules
const express = require('express');

// Controllers
const controller = require('../controllers');

// Routes
const graphQL = require('./graphql');

// Create router
const router = express.Router();

// Child routes
router.use('/graphql', graphQL);

// Root route
router.route('/').get(controller);

// Export modules
module.exports = router;
