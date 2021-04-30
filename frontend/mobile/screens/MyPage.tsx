import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { Container, ScreenLayout } from "../components";

const Header = styled.Text``;

const Button = styled.TouchableOpacity``;

const InnerText = styled.Text``;

export default function MyPage() {
  const navigation = useNavigation();
  return (
    <ScreenLayout>
      <Container>
        <Header>MyPage</Header>
        <Button onPress={() => navigation.navigate("RegisterPets")}>
          <InnerText>Register Pet</InnerText>
        </Button>
      </Container>
    </ScreenLayout>
  );
}
