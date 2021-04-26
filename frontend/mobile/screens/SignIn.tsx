import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import { useForm } from "react-hook-form";
import { Container } from "../components";
import { TextInputIcon } from "../components";
import { AuthLayout, AuthButton, AuthLink } from "../components/auth";

const TextInput = styled.TextInput`
  flex: 1;
  left: 40px;
`;

const Link = styled.TouchableOpacity``;

const RowText = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

export default function SignIn({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("userId");
    register("password");
  }, [register]);
  const goToHome = () => navigation.navigate("Home");
  const goToSignUp = () => navigation.navigate("SignUp");
  const onSetValue = (name: string) => (text: string) => setValue(name, text);
  const onValid = (data: object) => {
    console.log(data);
    // TODO validation
    goToHome();
  };

  const passwordInputRef = useRef();
  const onNext = (nextRef) => () => {
    const { current }: any = nextRef;
    current?.focus();
  };

  return (
    <AuthLayout title={`펫코에${"\n"}로그인하기`}>
      <Container margin={{ bottom: 18 }}>
        <TextInputIcon icon="person-outline">
          <TextInput
            placeholder="아이디를 입력해주세요."
            placeholderTextColor="#777"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={onNext(passwordInputRef)}
            blurOnSubmit={false}
            onChangeText={onSetValue("userId")}
          />
        </TextInputIcon>
        <TextInputIcon icon="lock-closed-outline">
          <TextInput
            ref={passwordInputRef}
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#777"
            returnKeyType="done"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={onSetValue("password")}
          />
        </TextInputIcon>
      </Container>
      <Container row margin={{ bottom: "20%" }}>
        <Link style={{ paddingRight: 47 }}>
          <RowText>아이디 찾기</RowText>
        </Link>
        <Link>
          <RowText>비밀번호 찾기</RowText>
        </Link>
      </Container>
      <Container margin={{ bottom: 19 }}>
        <AuthButton
          onPress={handleSubmit(onValid)}
          text="로그인 하기"
          disabled={false}
        />
      </Container>
      <Container row>
        <AuthLink
          onPress={goToSignUp}
          desc="펫코가 처음이신가요?"
          link="회원가입하기"
        />
      </Container>
    </AuthLayout>
  );
}
