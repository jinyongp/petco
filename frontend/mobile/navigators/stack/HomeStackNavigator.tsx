import { TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Platform } from "react-native";
import { nanumStyles } from "../../components/text/NanumText";
import {
  Home,
  MedicalSearch,
  RegisterPets,
  SearchLocation,
  SelectLocation,
  SelectPet,
  Reservation,
  VeterinaryCareList,
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
          ...TransitionPresets.ScaleFromCenterAndroid,
          headerBackTitle: "검색",
        }}
      />
      <Stack.Screen
        name="MedicalSearch"
        component={MedicalSearch}
        options={{
          headerTitle: "진료 과목 검색",
          headerTitleStyle: {
            ...nanumStyles.title,
            ...(Platform.OS === "android" && {
              left: Dimensions.get("screen").width / 2.6,
            }),
          },
        }}
      />
      <Stack.Screen name="VeterinaryCareList" component={VeterinaryCareList} />
      <Stack.Screen name="Reservation" component={Reservation} />
    </Stack.Navigator>
  );
}
