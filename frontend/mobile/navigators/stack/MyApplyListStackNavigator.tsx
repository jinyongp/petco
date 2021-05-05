import React from "react";
import { EstimateDetail, EstimateHistory, MyApplyList } from "../../screens";
import { Stack } from "../Factory";
import { stackNavigationOptions } from "../global/options";
import choco from "../../assets/images/choco.png";

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
      <Stack.Screen
        name="EstimateDetail"
        component={EstimateDetail}
        initialParams={{
          petInfo: {
            name: "초코",
            birth: "2013.03.17",
            profile: choco,
          },
        }}
      />
    </Stack.Navigator>
  );
}
