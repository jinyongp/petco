import React from "react";
import { MyPage, RegisterPets } from "../../screens";
import { Stack } from "../Factory";
import { stackNavigationOptions } from "../global/options";

export default function MyPageStackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name="MyProfile"
        component={MyPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="RegisterPets" component={RegisterPets} />
    </Stack.Navigator>
  );
}
