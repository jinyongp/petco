import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import AppNavigator from "./AppNavigator";
import { TabIcon } from "../components/nav";
import { Home, MyApplyList, MyProfile } from "../screens";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          component={Home}
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
          component={MyApplyList}
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
          component={MyProfile}
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
    </SafeAreaView>
  );
}
