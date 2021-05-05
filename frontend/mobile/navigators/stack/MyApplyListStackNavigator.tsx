import React from "react";
import { MyApplyList } from "../../screens";
import { Stack } from "../Factory";
import { stackNavigationOptions } from "../global/options";

export default function MyApplyListStackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name="MyApplyList"
        component={MyApplyList}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
