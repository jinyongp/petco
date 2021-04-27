import React from "react";
import styled from "styled-components/native";
import { Container, ScreenLayout } from "../components";

const Header = styled.Text``;

export default function MyProfile() {
  return (
    <ScreenLayout>
      <Container>
        <Header>MyApplyList</Header>
      </Container>
    </ScreenLayout>
  );
}
