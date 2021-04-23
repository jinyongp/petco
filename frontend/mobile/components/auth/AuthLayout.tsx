import React from "react";
import {
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

const DefaultContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled(DefaultContainer)`
  flex: 1;
  padding: 0 5% 0 5%;
`;

const HeaderContainer = styled(DefaultContainer)`
  align-items: flex-start;
  margin-bottom: 50px;
`;

const Welcome = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin: 10px;
`;

export default function AuthLayout({ title, children }) {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      disabled={Platform.OS === "web"}
    >
      <Container>
        <KeyboardAvoidingView style={{ width: "100%" }} behavior="position">
          <HeaderContainer>
            <Welcome>{title}</Welcome>
          </HeaderContainer>
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
