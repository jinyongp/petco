import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
  }

  type Query {
    profile: User!
  }
`;

const resolvers = {
  Query: {
    profile() {
      return { username: "Sample Username" };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(() => console.log("Running server on http://localhost:4000"));
