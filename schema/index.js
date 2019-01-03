// Import modules
const graphql = require('graphql');

// Destructure function objects
const {
  GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString
} = graphql;

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

// Root query (starting point)
const RootQueryType = new GraphQLObjectType({
  fields: {},
  name: 'RootQuery'
});

// Create schema
const schema = new GraphQLSchema({
  query: RootQueryType
});

// Export modules
module.exports = schema;
