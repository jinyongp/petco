import React from "react";
import { TabIcon } from "../components";
import { Tabs } from "./Factory";
import {
  HomeStackNavigator,
  MyApplyListStackNavigator,
  MyPageStackNavigator,
} from "./stack";

export default function TabNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "black",
        showLabel: false,
        tabStyle: {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              current={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyApplyList"
        component={MyApplyListStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              name={focused ? "paw" : "paw-outline"}
              color={color}
              current={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyProfile"
        component={MyPageStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
              current={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
