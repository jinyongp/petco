import React, { useEffect, useRef, useState } from "react";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { UserPayload } from "./@types";
import Person from "../assets/icons/person.svg";
import Lock from "../assets/icons/lock.svg";
import Phone from "../assets/icons/phone.svg";
import Email from "../assets/icons/email.svg";
import Dog from "../assets/animals/dog92.svg";
import {
  ConfirmModal,
  Container,
  ErrorModal,
  NanumText,
  ScreenLayout,
  TextInputIcon,
  TextLink,
  TouchableButton,
} from "../components";
import { TextInput } from "react-native";

const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $username: String!
    $email: String!
    $password: String!
    $phone_number: String!
    $is_valid: Boolean!
  ) {
    signUp(
      username: $username
      email: $email
      password: $password
      phone_number: $phone_number
      is_valid: $is_valid
    ) {
      ok
      status
      user {
        id
      }
    }
  }
`;

type InputFormType =
  | "email"
  | "password"
  | "username"
  | "phone_number"
  | "passwordCheck";

type VariableType = {
  email: string;
  password: string;
  username: string;
  phone_number: string;
  passwordCheck: string;
};

export default function SignUp() {
  const navigation = useNavigation();

  const [networkError, setNetworkError] = useState(false);
  const [alreadyExistError, setAlreadyExistError] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const [completed, setCompleted] = useState(false);
  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone_number: "",
      password: "",
      passwordCheck: "",
    },
  });
  const onCompleted = ({ signUp: { ok, user } }: UserPayload) => {
    if (!ok) setAlreadyExistError(true);
    else setCompleted(true);
  };
  const onError = (error: ApolloError) => {
    console.warn(error);
    setNetworkError(!!error);
  };
  const [signUp, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted,
    onError,
  });
  useEffect(() => {
    register("username", { required: true });
    register("email", { required: true });
    register("phone_number", { required: true });
    register("password", { required: true });
    register("passwordCheck", { required: true });
  }, [register]);

  const emailRef = useRef<TextInput>();
  const phoneRef = useRef<TextInput>();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const onNext = (nextRef: React.MutableRefObject<TextInput>) => () => {
    nextRef?.current?.focus();
  };
  const goToSignIn = () => navigation.navigate("SignIn");
  const onSetValue = (name: InputFormType) => (text: string) =>
    setValue(name, text);
  const onValid = (variables: VariableType) => {
    delete variables.passwordCheck;
    loading || signUp({ variables: { ...variables, is_valid: false } });
  };

  const onCloseModal = () => {
    const { email } = getValues();
    setCompleted(false);
    navigation.navigate({
      name: "SignIn",
      params: { email },
    });
  };

  return (
    <ScreenLayout>
      <NanumText type="header" margin={{ bottom: 40 }}>
        {`회원가입을${"\n"}환영합니다`}
      </NanumText>

      <Container margin={{ bottom: 40 }} space={300}>
        <TextInputIcon
          Icon={Person}
          size={20}
          placeholder="이름을 입력해 주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(emailRef)}
          onChangeText={onSetValue("username")}
        />
        <TextInputIcon
          Icon={Email}
          placeholder="이메일을 입력해 주세요."
          returnKeyType="next"
          keyboardType="email-address"
          inputRef={emailRef}
          onSubmitEditing={onNext(phoneRef)}
          onChangeText={onSetValue("email")}
        />
        <TextInputIcon
          Icon={Phone}
          placeholder="핸드폰 번호를 입력해 주세요."
          keyboardType="number-pad"
          returnKeyType="done"
          inputRef={phoneRef}
          onSubmitEditing={onNext(passwordRef)}
          onChangeText={onSetValue("phone_number")}
        />
        <TextInputIcon
          Icon={Lock}
          placeholder="비밀번호를 입력해 주세요."
          returnKeyType="next"
          inputRef={passwordRef}
          onSubmitEditing={onNext(passwordCheckRef)}
          onChangeText={onSetValue("password")}
          secureTextEntry
        />
        <TextInputIcon
          Icon={Lock}
          placeholder="비밀번호를 다시 입력해 주세요."
          returnKeyType="done"
          inputRef={passwordCheckRef}
          onChangeText={(text) => {
            setValue("passwordCheck", text);
            setIsPasswordCorrect(text !== watch("password"));
          }}
          error={!!watch("passwordCheck") && isPasswordCorrect}
          blurOnSubmit
          secureTextEntry
        />
      </Container>
      <Container margin={{ bottom: 16 }}>
        <TouchableButton
          title={loading ? "회원가입 중..." : "회원가입 하기"}
          onPress={handleSubmit(onValid)}
          loading={loading}
          disabled={
            !watch("email") ||
            !watch("phone_number") ||
            !watch("password") ||
            isPasswordCorrect
          }
        />
      </Container>
      <Container margin={{ bottom: 56 }}>
        <TextLink
          onPress={goToSignIn}
          desc="이미 회원이신가요?"
          link="로그인 하기"
        />
      </Container>
      <ErrorModal
        error={networkError}
        content={`네트워크가 연결되지 않았습니다.`}
        onClose={() => setNetworkError(false)}
      />
      <ErrorModal
        error={alreadyExistError}
        content={`이미 존재하는 계정입니다.`}
        onClose={() => setAlreadyExistError(false)}
      />
      <ConfirmModal
        isVisible={completed}
        onClose={onCloseModal}
        LeftPetSvg={Dog}
        header="회원가입 완료"
        content={`회원가입이 완료되었습니다!${"\n"}가입한 계정으로 로그인 해주세요.`}
        buttonTitle="로그인 하기"
      />
    </ScreenLayout>
  );
}
