import React from "react";
import { ScrollView } from "react-native";

export default function ScreenLayout({ children }) {
  return (
    <ScrollView
      style={{ width: "100%", flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {children}
    </ScrollView>
  );
}
