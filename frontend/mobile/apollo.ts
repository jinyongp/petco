import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const userTokenVar = makeVar("");

export const saveTokenAsync = async (token: string) => {
  isLoggedInVar(true);
  userTokenVar(token);
  await AsyncStorage.setItem("token", JSON.stringify(token));
};

export const terminateTokenAsync = async () => {
  isLoggedInVar(false);
  userTokenVar("");
  await AsyncStorage.clear();
};

const client = new ApolloClient({
  uri: "https://swift-falcon-63.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export default client;
