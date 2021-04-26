import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Container } from "../components";
import { TextInputIcon } from "../components";
import { AuthLayout, AuthLink, AuthButton } from "../components/auth";

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
  const goToSignIn = () => navigation.navigate("SignIn");
  const onSetValue = (name: string) => (text: string) => setValue(name, text);
  const onValid = (data: object) => {
    console.log(data);
    // TODO validation
    navigation.navigate("RegisterPets");
  };

  return (
    <AuthLayout title={`펫코${"\n"}회원가입`}>
      <Container margin={{ bottom: 50 }}>
        <TextInputIcon
          icon="person-outline"
          placeholder="아이디를 입력해 주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(phoneNumberRef)}
          onChangeText={onSetValue("userId")}
        />
        <TextInputIcon
          icon="phone-portrait-outline"
          placeholder="핸드폰 번호를 입력해 주세요."
          keyboardType="number-pad"
          returnKeyType="done"
          inputRef={phoneNumberRef}
          onSubmitEditing={onNext(passwordRef)}
          onChangeText={onSetValue("phoneNumber")}
        />
        <TextInputIcon
          icon="lock-closed-outline"
          placeholder="비밀번호를 입력해 주세요."
          returnKeyType="next"
          inputRef={passwordRef}
          onSubmitEditing={onNext(passwordCheckRef)}
          onChangeText={onSetValue("password")}
          secureTextEntry
        />
        <TextInputIcon
          icon="lock-closed-outline"
          placeholder="비밀번호를 다시 입력해 주세요."
          returnKeyType="done"
          inputRef={passwordCheckRef}
          onChangeText={onSetValue("passwordCheck")}
          blurOnSubmit
          secureTextEntry
        />
      </Container>
      <Container margin={{ bottom: 40 }}>
        <AuthButton
          text="반려동물 등록하기"
          onPress={handleSubmit(onValid)}
          disabled={false}
        />
      </Container>
      <Container margin={{ bottom: 30 }}>
        <AuthLink
          onPress={goToSignIn}
          desc="이미 회원이신가요?"
          link="로그인 하기"
        />
      </Container>
    </AuthLayout>
  );
}
