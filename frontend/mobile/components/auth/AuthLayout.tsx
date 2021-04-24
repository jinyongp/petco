import React from "react";
import {
  Keyboard,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

const DefaultContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const Container = styled(DefaultContainer)`
  flex: 1;
  padding: 0 5% 0 5%;
`;

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
    <Container>
      {/* TODO KeyboardAvoidingView 구현 */}
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        disabled={Platform.OS === "web"}
      >
        <ScrollView
          style={{ width: "100%", flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <HeaderContainer>
            <Welcome>{title}</Welcome>
          </HeaderContainer>
          {children}
          <FooterContainer></FooterContainer>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
