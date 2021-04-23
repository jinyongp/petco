import React from "react";
import styled from "styled-components/native";
import { useRef } from "react";
import { AuthLayout, TextInputIcon } from "../components/auth";

const DefaultContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InputContainer = styled(DefaultContainer)`
  margin-bottom: 18px;
`;

const RowTextContainer = styled(DefaultContainer)`
  flex-direction: row;
  margin-bottom: 20%;
`;

const ButtonContainer = styled(DefaultContainer)`
  margin-bottom: 19px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  left: 40px;
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
  const passwordInputRef = useRef();
  const onTextInputNext = () => {
    const { current }: any = passwordInputRef;
    current?.focus();
  };

  const goToHome = () => navigation.navigate("Home");
  const goToSignUp = () => navigation.navigate("SignUp");
  return (
    <AuthLayout title={`펫코에${"\n"}로그인하기`}>
      <InputContainer>
        <TextInputIcon icon="person-outline">
          <TextInput
            placeholder="아이디를 입력해주세요."
            placeholderTextColor="#333"
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={onTextInputNext}
            blurOnSubmit={false}
          />
        </TextInputIcon>
        <TextInputIcon icon="lock-closed-outline">
          <TextInput
            ref={passwordInputRef}
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#333"
            returnKeyType="done"
            autoCorrect={false}
            secureTextEntry
          />
        </TextInputIcon>
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
    </AuthLayout>
  );
}
