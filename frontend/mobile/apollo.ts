import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { User } from "./@types/models";

const uri = "http://54.180.87.186:5050/graphql";

export const isLoggedInVar = makeVar<boolean>(false);
export const userTokenVar = makeVar<string>("");
export const userInfoVar = makeVar<User>(null);

export const saveTokenAsync = async (token: string, user: User) => {
  isLoggedInVar(true);
  userTokenVar(token);
  userInfoVar(user);
  await AsyncStorage.setItem("token", JSON.stringify(token));
};

export const terminateTokenAsync = async () => {
  isLoggedInVar(false);
  userTokenVar("");
  userInfoVar(null);
  await AsyncStorage.clear();
};

const httpLink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers, authorization: userTokenVar() } };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
