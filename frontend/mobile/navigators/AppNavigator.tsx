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
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerBackTitle: "이전",
        headerBackTitleStyle: {
          color: "#666",
          fontWeight: "400",
          justifyContent: "center",
        },
        headerStyle: {
          backgroundColor: "white",
          shadowOpacity: 0,
          shadowOffset: { height: 0, width: 0 },
          shadowRadius: 0,
          elevation: 0,
        },
        headerBackImage: () => (
          <Ionicons
            name="chevron-back"
            size={30}
            color="#666"
            style={{ marginLeft: 5 }}
          />
        ),
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterPets" component={RegisterPets} options={{}} />
      <Stack.Screen name="SelectPet" component={SelectPet} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
}
