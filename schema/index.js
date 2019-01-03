// Import modules
const graphql = require('graphql');

// Destructure function objects
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;

// Constants
const BASE_URL = 'http://localhost:3000';

// Company type
const CompanyType = new GraphQLObjectType({
  fields: () => ({
    description: { type: GraphQLString },
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
  name: 'Company'
});

// User type
const UserType = new GraphQLObjectType({
  fields: () => ({
    age: { type: GraphQLInt },
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
  name: 'User'
});
