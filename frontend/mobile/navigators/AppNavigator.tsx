import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  RegisterPets,
  SearchLocation,
  SelectLocation,
  SelectPet,
  SignIn,
  SignUp,
} from "../screens";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterPets" component={RegisterPets} />
      <Stack.Screen name="SelectPet" component={SelectPet} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
}
