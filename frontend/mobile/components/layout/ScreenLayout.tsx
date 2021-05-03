import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Container from "../Container";
import DismissKeyboard from "./DismissKeyboard";
import PropTypes from "prop-types";
import { ScreenLayoutProps } from "../@types";

export default function ScreenLayout({
  children,
  align,
}: ScreenLayoutProps): JSX.Element {
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ flex: 1 }}
    >
      <Container padding="8%" style={{ alignItems: align, flex: 1 }}>
        {children}
      </Container>
    </KeyboardAwareScrollView>
  );
}

ScreenLayout.defaultProps = {
  align: "center",
};

ScreenLayout.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
};
