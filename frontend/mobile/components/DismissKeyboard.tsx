import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { CommonProps } from "./@types";

export default function DismissKeyboard({
  children,
}: CommonProps): JSX.Element {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      disabled={Platform.OS === "web"}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}

DismissKeyboard.propTypes = {
  children: PropTypes.node,
};
