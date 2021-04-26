import React from "react";
import styled from "styled-components/native";
import ScreenLayout from "../ScreenLayout";
import DefaultContainer from "../DefaultContainer";

const HeaderContainer = styled(DefaultContainer)`
  align-items: flex-start;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const FooterContainer = styled(DefaultContainer)`
  margin-bottom: 80px;
`;

const Welcome = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin: 10px;
`;

export default function AuthLayout({ title, children }) {
  return (
    <ScreenLayout>
      {/* TODO KeyboardAvoidingView 구현 */}
      <HeaderContainer>
        <Welcome>{title}</Welcome>
      </HeaderContainer>
      {children}
      <FooterContainer />
    </ScreenLayout>
  );
}
