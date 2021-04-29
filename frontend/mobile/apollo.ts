import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedIn = makeVar(false);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
