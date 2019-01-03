// Import modules
const graphql = require('graphql');

// Destructure function objects
const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;

// User type
const UserType = new GraphQLObjectType({
  fields: () => ({
    age: { type: GraphQLInt },
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
  name: 'User'
});
