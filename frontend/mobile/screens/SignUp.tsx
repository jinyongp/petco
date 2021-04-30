import React, { useEffect, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Container, NextButton } from "../components";
import { AuthLayout, AuthLink } from "../components/auth";
import { TextInputIcon } from "../components/input";
import { SignUpInput, SignUpPayload } from "./@types";

const SIGNUP_MUTATION = gql`
  mutation CreateAccount($input: CreateAccountInput) {
    createAccount(input: $input) {
      error
      user {
        id
      }
    }
  }
`;

export default function SignUp() {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue, watch, getValues } = useForm();
  const onCompleted = ({ createAccount: { error, user } }: SignUpPayload) => {
    // TODO error handling
    const { userId, password } = getValues();
    error || navigation.navigate("SignIn", { userId, password });
  };
  const [signUp, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted,
  });
  useEffect(() => {
    register("userId", { required: true });
    register("email", { required: true });
    register("phone", { required: true });
    register("password", { required: true });
    register("passwordCheck", { required: true });
  }, [register]);

  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const onNext = (nextRef: React.MutableRefObject<undefined>) => () => {
    const { current }: any = nextRef;
    current?.focus();
  };
  const goToSignIn = () => navigation.navigate("SignIn");
  const onSetValue = (name: string) => (text: string) => setValue(name, text);
  const onValid = (input: SignUpInput) => {
    delete input["passwordCheck"];
    loading || signUp({ variables: { input } });
  };

  return (
    <AuthLayout title={`펫코${"\n"}회원가입`}>
      <Container margin={{ bottom: 40 }}>
        <TextInputIcon
          icon="person-outline"
          placeholder="아이디를 입력해 주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(emailRef)}
          onChangeText={onSetValue("userId")}
        />
        <TextInputIcon
          icon="mail-outline"
          placeholder="이메일을 입력해 주세요."
          returnKeyType="next"
          keyboardType="email-address"
          inputRef={emailRef}
          onSubmitEditing={onNext(phoneRef)}
          onChangeText={onSetValue("email")}
        />
        <TextInputIcon
          icon="phone-portrait-outline"
          placeholder="핸드폰 번호를 입력해 주세요."
          keyboardType="number-pad"
          returnKeyType="done"
          inputRef={phoneRef}
          onSubmitEditing={onNext(passwordRef)}
          onChangeText={onSetValue("phone")}
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
      <Container margin={{ bottom: 16 }}>
        <NextButton
          text={loading ? "회원가입 중..." : "회원가입 하기"}
          onPress={handleSubmit(onValid)}
          disabled={
            !watch("userId") ||
            !watch("email") ||
            !watch("phone") ||
            !watch("password") ||
            !watch("passwordCheck")
          }
        />
      </Container>
      <Container margin={{ bottom: 56 }}>
        <AuthLink
          onPress={goToSignIn}
          desc="이미 회원이신가요?"
          link="로그인 하기"
        />
      </Container>
    </AuthLayout>
  );
}
