import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import { useForm } from "react-hook-form";
import { Container, TextInputIcon, NextButton } from "../components";
import { AuthLayout, AuthLink } from "../components/auth";
import Dog from "../assets/animals/dog103.svg";
import Cat from "../assets/animals/cat82.svg";

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
        <TextInputIcon
          icon="person-outline"
          placeholder="아이디를 입력해주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(passwordInputRef)}
          onChangeText={onSetValue("userId")}
        />
        <TextInputIcon
          icon="lock-closed-outline"
          inputRef={passwordInputRef}
          placeholder="비밀번호를 입력해주세요."
          returnKeyType="done"
          onChangeText={onSetValue("password")}
          blurOnSubmit
          secureTextEntry
        />
      </Container>
      <Container row margin={{ bottom: 40 }}>
        <Link style={{ paddingRight: 47 }}>
          <RowText>아이디 찾기</RowText>
        </Link>
        <Link>
          <RowText>비밀번호 찾기</RowText>
        </Link>
      </Container>
      <Container margin={{ bottom: 16 }}>
        <NextButton
          onPress={handleSubmit(onValid)}
          text="로그인 하기"
          disabled={false}
        />
      </Container>
      <Container row margin={{ bottom: 33 }}>
        <AuthLink
          onPress={goToSignUp}
          desc="펫코가 처음이신가요?"
          link="회원가입하기"
        />
      </Container>
      <Container row>
        <Dog width={100} height={100} />
        <Cat width={100} height={100} />
      </Container>
    </AuthLayout>
  );
}
