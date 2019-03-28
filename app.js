const express = require('express');
const morgan = require('morgan');

// Import route handlers
const routes = require('./routes');

// Load environment variables
require('./config/env');

// Load server configuration
const { PORT } = require('./config/server');

// Create Express app
const app = express();

// App configuration
app.set('port', PORT);

// HTTP request logger
app.use(morgan('dev'));

// Connect index route
app.use('/', routes);

module.exports = app;
