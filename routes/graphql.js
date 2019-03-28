const expressGraphQL = require('express-graphql');

const schema = require('../schema/index');

const graphQL = expressGraphQL({
  graphiql: true,
  schema
});

module.exports = graphQL;
