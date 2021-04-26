import React from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import DefaultContainer from "./DefaultContainer";
import DismissKeyboard from "./DismissKeyboard";
import ScrollContainer from "./ScrollContainer";

const Container = styled(DefaultContainer)`
  flex: 1;
  padding: 0 5% 0 5%;
`;

export default function ScreenLayout({ loading, children }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollContainer>
        <DismissKeyboard>
          <Container>{loading ? <ActivityIndicator /> : children}</Container>
        </DismissKeyboard>
      </ScrollContainer>
    </SafeAreaView>
  );
}

ScreenLayout.defaultProps = {
  loading: false,
};
