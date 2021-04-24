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
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: "",
          headerBackTitle: "    로그인",
          headerBackTitleStyle: {
            color: "#F5C01D",
            fontWeight: "800",
          },
          headerBackImage: () => null,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="RegisterPets"
        component={RegisterPets}
        options={{
          headerTitle: "",
          headerBackTitle: "    이전",
          headerTransparent: true,
          headerBackTitleStyle: {
            color: "black",
            letterSpacing: 10,
          },
          headerBackImage: () => (
            <Ionicons name="chevron-back" size={30} style={{ left: 20 }} />
          ),
        }}
      />
      <Stack.Screen name="SelectPet" component={SelectPet} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
}
