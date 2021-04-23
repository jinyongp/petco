import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { AppNavigation } from "./navigators";

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const startAsync = () => {
    // TODO async 작업
    return Promise.all([]);
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
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
