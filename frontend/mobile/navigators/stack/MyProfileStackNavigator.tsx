import React from "react";
import { MyProfile, RegisterPets } from "../../screens";
import { Stack } from "../Factory";
import { stackNavigationOptions } from "../global/options";

export default function MyProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="RegisterPets" component={RegisterPets} />
    </Stack.Navigator>
  );
}
