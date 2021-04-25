import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import DefaultContainer from "./DefaultContainer";

const Container = styled(DefaultContainer)`
  flex: 1;
  padding: 0 5% 0 5%;
`;

export default function ScreenLayout({ loading, children }) {
  return <Container>{loading ? <ActivityIndicator /> : children}</Container>;
}

ScreenLayout.defaultProps = {
  loading: false,
};
