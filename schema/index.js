// Import modules
const axios = require('axios');
const graphql = require('graphql');

// Destructure function objects
const {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

// Constants
const BASE_URL = 'http://localhost:3000';

// Company type
const CompanyType = new GraphQLObjectType({
  fields: () => ({
    description: { type: GraphQLString },
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    users: {
      resolve(parentValue) {
        // Get users by company ID
        return axios
          .get(`${BASE_URL}/companies/${parentValue.id}/users`)
          .then(response => response.data);
      },
      type: new GraphQLList(UserType)
    }
  }),
  name: 'Company'
});

// User type
const UserType = new GraphQLObjectType({
  fields: () => ({
    age: { type: GraphQLInt },
    company: {
      resolve(parentValue) {
        // Get company by ID
        return axios
          .get(`${BASE_URL}/companies/${parentValue.companyId}`)
          .then(response => response.data);
      },
      type: CompanyType
    },
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

// Root mutation
const RootMutationType = new GraphQLObjectType({
  fields: {
    addUser: {
      args: {
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLInt },
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { age, name }) {
        // Add new user
        return axios.post(`${BASE_URL}/users`, { age, name }).then(response => response.data);
      },
      type: UserType
    }
  },
  name: 'RootMutation'
});

// Create schema
const schema = new GraphQLSchema({
  mutation: RootMutationType,
  query: RootQueryType
});

// Export modules
module.exports = schema;
