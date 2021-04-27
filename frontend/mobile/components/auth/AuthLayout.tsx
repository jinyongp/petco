import React from "react";
import styled from "styled-components/native";
import ScreenLayout from "../ScreenLayout";
import DefaultContainer from "../DefaultContainer";
import Container from "../Container";
import { AuthLayoutProps } from "../@types";
import PropTypes from "prop-types";

// TODO Container가 flex-box를 지원하도록 변경
const HeaderContainer = styled(DefaultContainer)`
  align-items: flex-start;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Welcome = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin: 10px;
`;

export default function AuthLayout({
  title,
  children,
}: AuthLayoutProps): JSX.Element {
  return (
    <ScreenLayout>
      {/* TODO KeyboardAvoidingView 구현 */}
      <HeaderContainer>
        <Welcome>{title}</Welcome>
      </HeaderContainer>
      {children}
      <Container margin={{ bottom: 80 }} />
    </ScreenLayout>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
