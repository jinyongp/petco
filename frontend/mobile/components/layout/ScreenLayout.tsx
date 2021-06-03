import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PropTypes from "prop-types";
import { ScreenLayoutProps } from "../@types";
import { ActivityIndicator } from "react-native";

export default function ScreenLayout({
  scrollEnabled,
  children,
  loading,
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
        justifyContent: align,
        alignItems: "center",
        paddingHorizontal: "7%",
        paddingVertical: "5%",
      }}
      extraScrollHeight={50}
      scrollEnabled={scrollEnabled}
    >
      {loading ? <ActivityIndicator /> : children}
    </KeyboardAwareScrollView>
  );
}

ScreenLayout.defaultProps = {
  scrollEnabled: true,
  loading: false,
  align: "center",
};

ScreenLayout.propTypes = {
  scrollEnabled: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.bool,
  align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
};
