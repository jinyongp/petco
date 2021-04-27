import React from "react";
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
          {loading ? <ActivityIndicator /> : children}
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
