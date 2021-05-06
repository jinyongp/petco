import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const currentUserIdVar = makeVar(0);
export const userTokenVar = makeVar("");

export const saveTokenAsync = async (token: string, id: number) => {
  isLoggedInVar(true);
  userTokenVar(token);
  currentUserIdVar(id);
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["userId", JSON.stringify(id)],
  ]);
};

export const terminateTokenAsync = async () => {
  isLoggedInVar(false);
  userTokenVar("");
  currentUserIdVar(0);
  await AsyncStorage.clear();
};

const client = new ApolloClient({
  uri: "https://terrible-earwig-25.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export default client;
