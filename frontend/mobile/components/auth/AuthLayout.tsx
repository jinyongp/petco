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
`;

const Welcome = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin: 10px;
`;

export default function AuthLayout({ title, children }) {
  const keyboardViewPropsByPlatform = () => {
    const { OS } = Platform;
    const props = (behavior, keyboardVerticalOffset = 0) => ({
      behavior,
      keyboardVerticalOffset,
    });
    switch (OS) {
      case "android":
        return props("height");
      case "ios":
        return props("padding");
      default:
        return props("position");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ width: "100%", flex: 1 }}
      {...keyboardViewPropsByPlatform()}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        disabled={Platform.OS === "web"}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1, justifyContent: "center" }}
        >
          <Container>
            <HeaderContainer>
              <Welcome>{title}</Welcome>
            </HeaderContainer>
            {children}
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
