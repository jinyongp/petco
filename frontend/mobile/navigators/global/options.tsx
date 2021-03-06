import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationOptions, TransitionPresets } from "@react-navigation/stack";

export const stackNavigationOptions: StackNavigationOptions = {
  headerTitle: "",
  headerBackTitle: "이전",
  headerBackTitleStyle: {
    color: "#666",
    fontWeight: "400",
    left: 5,
  },
  headerTitleContainerStyle: {
    left: 0,
  },
  headerStyle: {
    backgroundColor: "#fff",
    shadowOpacity: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 0,
    elevation: 0,
  },
  headerBackImage: () => (
    <Ionicons name="chevron-back" size={30} color="#666" style={{ left: 5 }} />
  ),
  ...TransitionPresets.SlideFromRightIOS,
};
