import { Ionicons } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import React from "react";
import {
  Home,
  RegisterPets,
  SearchLocation,
  SelectLocation,
  SelectPet,
} from "../../screens";
import { Stack } from "../Factory";
import { stackNavigationOptions } from "../global/options";

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SelectPet" component={SelectPet} />
      <Stack.Screen name="RegisterPets" component={RegisterPets} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={{
          ...TransitionPresets.FadeFromBottomAndroid,
          headerBackTitle: "검색",
        }}
      />
    </Stack.Navigator>
  );
}
