import React from "react";
import { ScrollView } from "react-native";
import { CommonProps } from "./@types";
import PropTypes from "prop-types";
export default function ScrollContainer({
  children,
}: CommonProps): JSX.Element {
  return (
    <ScrollView
      style={{ width: "100%", flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {children}
    </ScrollView>
  );
}

ScrollContainer.propTypes = {
  children: PropTypes.node,
};
