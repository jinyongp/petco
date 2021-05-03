import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { AuthNavigator, TabNavigator } from "./navigators";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedIn } from "./apollo";

export default function App() {
  const isLoggedInVar = useReactiveVar(isLoggedIn);
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const startAsync = async () => {
    await Font.loadAsync({
      NanumLight: require("./assets/fonts/NanumGothic/NanumGothicLight.ttf"),
      NanumRegular: require("./assets/fonts/NanumGothic/NanumGothic.ttf"),
      NanumBold: require("./assets/fonts/NanumGothic/NanumGothicBold.ttf"),
      NanumExtraBold: require("./assets/fonts/NanumGothic/NanumGothicExtraBold.ttf"),
      ...Ionicons.font,
    });
    await new Promise((res) => setTimeout(res, 500));
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
