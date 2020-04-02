const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;
const _ = require("lodash");

const users = [
  {
    id: "1",
    name: "Rue",
    age: 1
  },
  {
    id: "2",
    name: "Draco",
    age: 3
  }
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
