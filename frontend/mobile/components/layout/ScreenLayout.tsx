import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PropTypes from "prop-types";
import { ScreenLayoutProps } from "../@types";

export default function ScreenLayout({
  children,
  align,
}: ScreenLayoutProps): JSX.Element {
  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: "white",
      }}
      keyboardDismissMode="interactive"
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: align,
        paddingHorizontal: "7%",
        paddingVertical: "5%",
      }}
      extraScrollHeight={50}
    >
      {children}
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
