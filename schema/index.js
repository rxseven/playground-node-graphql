const graphql = require('graphql');

const companyService = require('../services/company');
const userService = require('../services/user');

// Destructure function objects
const {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

// Company type
const CompanyType = new GraphQLObjectType({
  fields: () => ({
    description: { type: GraphQLString },
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    users: {
      resolve: ({ id }) => companyService.getUsers({ id }),
      type: new GraphQLList(UserType) // eslint-disable-line
    }
  }),
  name: 'Company'
});

// User type
const UserType = new GraphQLObjectType({
  fields: () => ({
    age: { type: GraphQLInt },
    company: {
      resolve: ({ companyId }) => companyService.getCompany({ id: companyId }),
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
      resolve: (parentValue, { id }) => companyService.getCompany({ id }),
      type: CompanyType
    },
    user: {
      args: { id: { type: GraphQLString } },
      resolve: (parentValue, { id }) => userService.getUser({ id }),
      type: UserType
    }
  },
  name: 'RootQuery'
});

// Root mutation
const RootMutationType = new GraphQLObjectType({
  fields: {
    addCompany: {
      args: {
        description: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parentValue, args) => companyService.addCompany(args),
      type: CompanyType
    },
    deleteCompany: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parentValue, { id }) => companyService.deleteCompany({ id }),
      type: CompanyType
    },
    editCompany: {
      args: {
        description: { type: GraphQLString },
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString }
      },
      resolve: (parentValue, args) => companyService.updateCompany(args),
      type: CompanyType
    },
    addUser: {
      args: {
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parentValue, args) => userService.addUser(args),
      type: UserType
    },
    deleteUser: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parentValue, { id }) => userService.deleteUser({ id }),
      type: UserType
    },
    editUser: {
      args: {
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString },
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString }
      },
      resolve: (parentValue, args) => userService.updateUser(args),
      type: UserType
    }
  },
  name: 'RootMutation'
});

// Create GraphQL schema instance
const schema = new GraphQLSchema({
  mutation: RootMutationType,
  query: RootQueryType
});

module.exports = schema;
