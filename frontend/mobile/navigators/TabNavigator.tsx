import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import AppNavigator from "./AppNavigator";
import { Ionicons } from "@expo/vector-icons";
import { Home, MyApplyList, MyProfile } from "../screens";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fec544" }}>
      <Tabs.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "black",
          activeBackgroundColor: "#fec544",
          showLabel: false,
          tabStyle: {
            borderTopRightRadius: 80,
            borderTopLeftRadius: 80,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={focused ? 26 : 22}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="MyApplyList"
          component={MyApplyList}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "paw" : "paw-outline"}
                color={color}
                size={focused ? 26 : 22}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                color={color}
                size={focused ? 26 : 22}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </SafeAreaView>
  );
}
