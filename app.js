// Import modules
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

// Load environment variables
require('./config/env');

// Load server configuration
const { PORT } = require('./config/server');

// Create Express app
const app = express();

// App configuration
app.set('port', PORT);

// Configure middleware
app.use(morgan('dev'));

// Routes
app.use('/', routes);

// Export modules
module.exports = app;
