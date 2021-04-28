import React from "react";
import styled from "styled-components/native";
import ScreenLayout from "../ScreenLayout";
import DefaultContainer from "../DefaultContainer";
import Container from "../Container";
import { AuthLayoutProps } from "../@types";
import PropTypes from "prop-types";

const Welcome = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin-left: 10px;
`;

export default function AuthLayout({
  title,
  children,
}: AuthLayoutProps): JSX.Element {
  return (
    <ScreenLayout>
      {/* TODO KeyboardAvoidingView 구현 */}
      <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 40 }}>
        <Welcome>{title}</Welcome>
      </Container>
      <Container>{children}</Container>
    </ScreenLayout>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
