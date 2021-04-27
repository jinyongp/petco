import React from "react";
import { ActivityIndicator } from "react-native";
import Container from "./Container";
import DismissKeyboard from "./DismissKeyboard";
import ScrollContainer from "./ScrollContainer";

export default function ScreenLayout({ loading, children }) {
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
