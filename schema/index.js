// Import modules
const graphql = require('graphql');

// Destructure function objects
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;

// Constants
const BASE_URL = 'http://localhost:3000';

// User type
const UserType = new GraphQLObjectType({
  fields: () => ({
    age: { type: GraphQLInt },
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
  name: 'User'
});
