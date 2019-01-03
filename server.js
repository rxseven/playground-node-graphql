// Import modules
const app = require('./app');

// Variables
const PORT = app.get('port');

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} in ${app.get('env')} mode`);
});

// Export modules
module.exports = server;
