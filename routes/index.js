// Import modules
const express = require('express');

// Controllers
const controller = require('../controllers');

// Create router
const router = express.Router();

// Root route
router.route('/').get(controller);

// Export modules
module.exports = router;
