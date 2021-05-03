import React, { useEffect, useRef, useState } from "react";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { SignUpInput, SignUpPayload } from "./@types";
import Person from "../assets/icons/person.svg";
import Lock from "../assets/icons/lock.svg";
import Phone from "../assets/icons/phone.svg";
import Chat from "../assets/icons/chat.svg";
import Dog from "../assets/animals/dog92.svg";
import {
  ConfirmModal,
  Container,
  ErrorModal,
  MainTitle,
  ScreenLayout,
  TextInputIcon,
  TextLink,
  TouchableButton,
} from "../components";

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

  const [networkError, setNetworkError] = useState(false);
  const [alreadyExistError, setAlreadyExistError] = useState(false);

  const [completed, setCompleted] = useState(false);
  const { register, handleSubmit, setValue, watch, getValues } = useForm();
  const onCompleted = ({ createAccount: { error, user } }: SignUpPayload) => {
    // TODO Additional Error Handling
    if (error?.includes("exist")) setAlreadyExistError(true);
    else setCompleted(true);
  };
  const onError = (error: ApolloError) => {
    setNetworkError(!!error);
  };
  const [signUp, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted,
    onError,
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

  const onCloseModal = () => {
    const { userId } = getValues();
    setCompleted(false);
    navigation.navigate({
      name: "SignIn",
      params: { userId },
    });
  };

  return (
    <ScreenLayout>
      <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 40 }}>
        <MainTitle title={`회원가입을${"\n"}환영합니다`} />
      </Container>

      <Container
        margin={{ bottom: 40 }}
        style={{ justifyContent: "space-between", height: 330 }}
      >
        <TextInputIcon
          Icon={Person}
          size={20}
          placeholder="아이디를 입력해 주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(emailRef)}
          onChangeText={onSetValue("userId")}
        />
        <TextInputIcon
          Icon={Chat}
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
          onChangeText={onSetValue("phone")}
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
          onChangeText={onSetValue("passwordCheck")}
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
            !watch("userId") ||
            !watch("email") ||
            !watch("phone") ||
            !watch("password") ||
            !watch("passwordCheck")
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
        content={`회원가입이 완료되었습니다!${"\n"}가입한 계정으로 다시 로그인을 해주세요.`}
        buttonTitle="로그인 하기"
      />
    </ScreenLayout>
  );
}
