// Import modules
const axios = require('axios');
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
  fields: {
    company: {
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`${BASE_URL}/companies/${args.id}`).then(response => response.data);
      },
      type: CompanyType
    },
    user: {
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        // Get user by ID
        return axios.get(`${BASE_URL}/users/${args.id}`).then(response => response.data);
      },
      type: UserType
    }
  },
  name: 'RootQuery'
});

// Create schema
const schema = new GraphQLSchema({
  query: RootQueryType
});

// Export modules
module.exports = schema;
