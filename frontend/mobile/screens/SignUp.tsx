import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import { AuthLayout, TextInputIcon, AuthButton } from "../components/auth";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InputContainer = styled(Container)`
  margin-bottom: 50px;
`;

const ButtonContainer = styled(Container)`
  margin-bottom: 0px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  left: 40px;
`;

export default function SignUp({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("userId");
    register("phoneNumber");
    register("password");
    register("passwordCheck");
  }, [register]);

  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const onNext = (nextRef) => () => {
    const { current }: any = nextRef;
    current?.focus();
  };
  const onSetValue = (name: string) => (text: string) => setValue(name, text);
  const onValid = (data: object) => {
    console.log(data);
    // TODO validation
  };

  return (
    <AuthLayout title={`펫코${"\n"}회원가입`}>
      <InputContainer>
        <TextInputIcon icon="person-outline">
          <TextInput
            placeholder="아이디를 입력해 주세요."
            placeholderTextColor="#777"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={onNext(phoneNumberRef)}
            onChangeText={onSetValue("userId")}
          />
        </TextInputIcon>
        <TextInputIcon icon="phone-portrait-outline">
          <TextInput
            placeholder="핸드폰 번호를 입력해 주세요."
            placeholderTextColor="#777"
            keyboardType="number-pad"
            returnKeyType="done"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            ref={phoneNumberRef}
            onSubmitEditing={onNext(passwordRef)}
            onChangeText={onSetValue("phoneNumber")}
          />
        </TextInputIcon>
        <TextInputIcon icon="lock-closed-outline">
          <TextInput
            placeholder="비밀번호를 입력해 주세요."
            placeholderTextColor="#777"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            ref={passwordRef}
            secureTextEntry
            onSubmitEditing={onNext(passwordCheckRef)}
            onChangeText={onSetValue("password")}
          />
        </TextInputIcon>
        <TextInputIcon icon="lock-closed-outline">
          <TextInput
            placeholder="비밀번호를 다시 입력해 주세요."
            placeholderTextColor="#777"
            returnKeyType="done"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            ref={passwordCheckRef}
            secureTextEntry
            onSubmitEditing={handleSubmit(onValid)}
            onChangeText={onSetValue("passwordCheck")}
          />
        </TextInputIcon>
      </InputContainer>
      <ButtonContainer>
        <AuthButton
          text="반려동물 등록하기"
          onPress={handleSubmit(onValid)}
          disabled={false}
        />
      </ButtonContainer>
    </AuthLayout>
  );
}
