import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DefaultContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled(DefaultContainer)`
  flex: 1;
  padding: 10% 10% 30% 10%;
`;

const HeaderContainer = styled(DefaultContainer)`
  align-items: flex-start;
  margin-bottom: 50px;
`;

const InputContainer = styled(DefaultContainer)`
  margin-bottom: 18px;
`;

const RowTextContainer = styled(DefaultContainer)`
  flex-direction: row;
  margin-bottom: 78px;
`;

const ButtonContainer = styled(DefaultContainer)`
  margin-bottom: 19px;
`;

const Welcome = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin: 10px;
`;

const InputWrapper = styled(DefaultContainer)`
  flex-direction: row;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 56px;
  padding: 0px 0px 0px 74px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;

const Link = styled.TouchableOpacity``;

const RowText = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const Button = styled.TouchableOpacity`
  background-color: #fec544;
  width: 100%;
  padding: 20px 20px;
  border-radius: 30px;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const InnerText = styled.Text`
  font-size: 15px;
  font-weight: 800;
  text-align: center;
`;

export default function SignIn({ navigation }) {
  const goToHome = () => navigation.navigate("Home");
  const goToSignUp = () => navigation.navigate("SignUp");
  return (
    <Container>
      <HeaderContainer>
        <Welcome>펫코에{"\n"}로그인하기</Welcome>
      </HeaderContainer>
      <InputContainer>
        <InputWrapper style={{ alignItems: "flex-end", paddingBottom: 7 }}>
          {/* <Ionicons name="lock-closed-outline" size={25} /> */}
          <TextInput
            placeholder="아이디를 입력해주세요."
            placeholderTextColor="#333"
            returnKeyType="next"
          />
        </InputWrapper>
        <InputWrapper style={{ alignItems: "flex-start", paddingTop: 7 }}>
          {/* <Ionicons name="lock-closed-outline" size={25} /> */}
          <TextInput
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#333"
            returnKeyType="done"
            secureTextEntry
          />
        </InputWrapper>
      </InputContainer>
      <RowTextContainer>
        <Link style={{ paddingRight: 47 }}>
          <RowText>아이디 찾기</RowText>
        </Link>
        <Link>
          <RowText>비밀번호 찾기</RowText>
        </Link>
      </RowTextContainer>
      <ButtonContainer>
        <Button onPress={goToHome}>
          <InnerText>로그인 하기</InnerText>
        </Button>
      </ButtonContainer>
      <RowTextContainer style={{ marginBottom: 0 }}>
        <RowText style={{ paddingRight: 16 }}>펫코가 처음이신가요?</RowText>
        <Link onPress={goToSignUp}>
          <RowText style={{ color: "#F5C01D" }}>회원가입하기</RowText>
        </Link>
      </RowTextContainer>
    </Container>
  );
}
