import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { User } from "./@types/models";

const uri = "https://ancient-ladybug-87.loca.lt/graphql";

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

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
