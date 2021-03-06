import React from "react";
import { Stack } from "./Factory";
import { SignIn, SignUp } from "../screens";
import { stackNavigationOptions } from "./global/options";

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
