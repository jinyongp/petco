import React from "react";
import { EstimateHistory, MyApplyList } from "../../screens";
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
      <Stack.Screen name="EstimateHistory" component={EstimateHistory} />
    </Stack.Navigator>
  );
}
