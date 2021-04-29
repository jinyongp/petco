import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Container, NextButton } from "../components";
import { AuthLayout, AuthLink } from "../components/auth";
import { TextInputIcon } from "../components/input";
import { isLoggedIn } from "../apollo";
import { SignInPayload, SignInInput } from "./@types";
import Dog from "../assets/animals/dog103.svg";
import Cat from "../assets/animals/cat82.svg";

const Link = styled.TouchableOpacity``;

const RowText = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const SIGNIN_MUTATION = gql`
  mutation Login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function SignIn({ route: { params } }) {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue, watch } = useForm({
    // FIXME 회원 가입 시 작성한 계정을 기본값으로 설정한다 - 동작 안함
    defaultValues: {
      userId: params?.userId,
      password: params?.password,
    },
  });
  useEffect(() => {
    register("userId", { required: true });
    register("password", { required: true });
  }, [register]);

  const onCompleted = ({ login: { ok, token, error } }: SignInPayload) => {
    // TODO token, error handling
    isLoggedIn(ok);
  };
  const [signIn, { loading }] = useMutation(SIGNIN_MUTATION, {
    onCompleted,
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
    <AuthLayout title={`펫코에${"\n"}로그인하기`}>
      <Container margin={{ bottom: 18 }}>
        <TextInputIcon
          icon="person-outline"
          value={watch("userId")}
          placeholder="아이디를 입력해주세요."
          returnKeyType="next"
          onSubmitEditing={onNext(passwordInputRef)}
          onChangeText={onSetValue("userId")}
        />
        <TextInputIcon
          icon="lock-closed-outline"
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
          text={loading ? "로그인 중..." : "로그인 하기"}
          disabled={!watch("userId") || !watch("password")}
        />
      </Container>
      <Container row margin={{ bottom: 33 }}>
        <AuthLink
          onPress={() => navigation.navigate("SignUp")}
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
