import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ActivityIndicator } from "react-native";
import Container from "./Container";
import DismissKeyboard from "./DismissKeyboard";
import ScrollContainer from "./ScrollContainer";
import PropTypes from "prop-types";
import { ScreenLayoutProps } from "./@types";

export default function ScreenLayout({
  loading,
  children,
}: ScreenLayoutProps): JSX.Element {
  return (
    <ScrollContainer>
      <DismissKeyboard>
        <Container padding={{ left: "5%", right: "5%" }}>
          <KeyboardAwareScrollView style={{ width: "100%" }} extraHeight={0}>
            {loading ? <ActivityIndicator /> : children}
          </KeyboardAwareScrollView>
        </Container>
      </DismissKeyboard>
    </ScrollContainer>
  );
}

ScreenLayout.defaultProps = {
  loading: false,
};

ScreenLayout.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
};
