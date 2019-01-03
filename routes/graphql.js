// Import modules
const expressGraphQL = require('express-graphql');

const schema = require('../schema/index');

const graphQL = expressGraphQL({
  graphiql: true,
  schema
});

// Export modules
module.exports = graphQL;
