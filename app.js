// Import modules
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

// Load environment variables
dotenv.config({ path: '.env' });

// Create Express app
const app = express();

// Configure app
app.set('port', process.env.PORT);

// Configure middleware
app.use(morgan('dev'));

// Routes
app.use('/', routes);

// Export modules
module.exports = app;
