import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { AuthNavigator, TabNavigator } from "./navigators";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedIn } from "./apollo";

export default function App() {
  const isLoggedInVar = useReactiveVar(isLoggedIn);
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const startAsync = async () => {
    // TODO async 작업
    const waitFiveSeconds = new Promise((res) => setTimeout(res, 500));
    await Promise.all([waitFiveSeconds]);
  };
  if (loading) {
    return (
      <AppLoading
        onError={console.warn}
        onFinish={onFinish}
        startAsync={startAsync}
      />
    );
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          {isLoggedInVar ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
