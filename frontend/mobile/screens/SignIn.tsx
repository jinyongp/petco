import React, { useRef, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { isLoggedIn } from "../apollo";
import { Container } from "../components";
import { TextInputIcon } from "../components/input";
import { ScreenLayout } from "../components/layout";
import { MainTitle, PlainText } from "../components/text";
import { TextLink, TouchableButton } from "../components/button";
import { SignInInput, SignInPayload } from "./@types";
import Lock from "../assets/icons/lock.svg";
import Person from "../assets/icons/person.svg";
import Dog from "../assets/animals/dog103.svg";
import Cat from "../assets/animals/cat82.svg";
import { ConfirmModal } from "../components/modal";

const SIGNIN_MUTATION = gql`
  mutation Login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function SignIn(): JSX.Element {
  const navigation = useNavigation();
  const [networkError, setNetworkError] = useState(false);
  const [accountError, setAccountError] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm();
  useEffect(() => {
    register("userId", { required: true });
    register("password", { required: true });
  }, [register]);

  const onCompleted = ({ login: { ok, token, error } }: SignInPayload) => {
    // TODO - token
    setAccountError(Boolean(error));
    isLoggedIn(ok);
  };
  const onError = (error: ApolloError) => {
    setNetworkError(!!error);
  };

  const [signIn, { loading }] = useMutation(SIGNIN_MUTATION, {
    onCompleted,
    onError,
  });

  const onSetValue = (name: any) => (text: string) => setValue(name, text);
  const onValid = (variables: SignInInput) => {
    loading || signIn({ variables });
  };

  const passwordInputRef = useRef();
  const onNext = (nextRef: React.MutableRefObject<undefined>) => () => {
    const { current }: any = nextRef;
    current?.focus();
  };

  return (
    <ScreenLayout>
      <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 40 }}>
        <MainTitle title={`펫코에${"\n"}로그인하기`} />
      </Container>

      <Container margin={{ bottom: 25 }}>
        <TextInputIcon
          Icon={Person}
          size={20}
          value={watch("userId")}
          placeholder="아이디를 입력해주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(passwordInputRef)}
          onChangeText={onSetValue("userId")}
        />
        <TextInputIcon
          Icon={Lock}
          size={24}
          value={watch("password")}
          inputRef={passwordInputRef}
          placeholder="비밀번호를 입력해주세요."
          returnKeyType="done"
          onChangeText={onSetValue("password")}
          blurOnSubmit
          secureTextEntry
        />
      </Container>

      <Container row margin={{ bottom: 40 }}>
        <TouchableOpacity style={{ paddingRight: 47 }}>
          <PlainText title="아이디 찾기" />
        </TouchableOpacity>
        <TouchableOpacity>
          <PlainText title="비밀번호 찾기" />
        </TouchableOpacity>
      </Container>

      <Container margin={{ bottom: 16 }}>
        <TouchableButton
          onPress={handleSubmit(onValid)}
          title={loading ? "로그인 중..." : "로그인 하기"}
          disabled={!watch("userId") || !watch("password")}
          loading={loading}
        />
      </Container>
      <Container row margin={{ bottom: 33 }}>
        <TextLink
          onPress={() => navigation.navigate("SignUp")}
          desc="펫코가 처음이신가요?"
          link="회원 가입하기"
        />
      </Container>
      <Container row>
        <Dog width={100} height={100} />
        <Cat width={100} height={100} />
      </Container>
      <Container>
        <ErrorModal
          error={networkError}
          content={`네트워크가 연결되지 않았습니다.`}
          onClose={() => setNetworkError(false)}
        />
        <ErrorModal
          error={accountError}
          content={`로그인 정보가 일치하지 않습니다.${"\n"}아이디나 비밀번호를 확인해주세요.`}
          onClose={() => setAccountError(false)}
        />
      </Container>
    </ScreenLayout>
  );
}

interface ErrorModalProps {
  error: boolean;
  content: string;
  onClose: () => void;
}

function ErrorModal({ error, content, onClose }: ErrorModalProps): JSX.Element {
  return (
    <ConfirmModal
      isVisible={error}
      content={content}
      onClose={onClose}
      containerSize={{ width: 330 }}
      buttonSize={{ width: 160 }}
      buttonTitle="확인"
    />
  );
}
