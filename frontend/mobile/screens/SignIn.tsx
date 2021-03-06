import React, { useRef, useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ApolloError, gql, useLazyQuery } from "@apollo/client";
import { saveTokenAsync } from "../apollo";
import { ParamList, UserPayload } from "./@types";
import Lock from "../assets/icons/lock.svg";
import Email from "../assets/icons/email.svg";
import Dog from "../assets/animals/dog103.svg";
import Cat from "../assets/animals/cat82.svg";
import {
  Container,
  ErrorModal,
  NanumText,
  ScreenLayout,
  TextInputIcon,
  TextLink,
  TouchableButton,
} from "../components";

const SIGNIN_QUERY = gql`
  query SigIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      ok
      token
      status
    }
  }
`;

type InputFormType = "email" | "password";
type VariableType = {
  email: string;
  password: string;
};

export default function SignIn(): JSX.Element {
  const { params } = useRoute<RouteProp<ParamList, "SignIn">>();
  const navigation = useNavigation();
  const [networkError, setNetworkError] = useState(false);
  const [accountError, setAccountError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      email: params?.email,
      password: "",
    },
  });
  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  const onCompleted = ({
    signIn: { ok, token, status, user },
  }: UserPayload) => {
    setAccountError(!ok);
    ok && saveTokenAsync(token, user);
  };
  const onError = (error: ApolloError) => {
    console.warn(error);
    setNetworkError(!!error);
  };

  const [signIn, { loading }] = useLazyQuery(SIGNIN_QUERY, {
    onCompleted,
    onError,
  });

  const onSetValue = (name: InputFormType) => (text: string) =>
    setValue(name, text);
  const onValid = (variables: VariableType) => loading || signIn({ variables });

  const passwordInputRef = useRef<TextInput>();
  const onNext = (nextRef: React.MutableRefObject<TextInput>) => () => {
    nextRef?.current?.focus();
  };

  return (
    <ScreenLayout>
      <NanumText type="header" margin={{ bottom: 40 }}>
        {`?????????${"\n"}???????????????`}
      </NanumText>

      <Container margin={{ bottom: 25 }} space={120}>
        <TextInputIcon
          Icon={Email}
          size={20}
          value={watch("email")}
          placeholder="???????????? ??????????????????."
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={onNext(passwordInputRef)}
          onChangeText={onSetValue("email")}
        />
        <TextInputIcon
          Icon={Lock}
          size={24}
          value={watch("password")}
          inputRef={passwordInputRef}
          placeholder="??????????????? ??????????????????."
          returnKeyType="done"
          onChangeText={onSetValue("password")}
          blurOnSubmit
          secureTextEntry
        />
      </Container>

      <Container row margin={{ bottom: 40 }}>
        <TouchableOpacity style={{ paddingRight: 47 }}>
          <NanumText>????????? ??????</NanumText>
        </TouchableOpacity>
        <TouchableOpacity>
          <NanumText>???????????? ??????</NanumText>
        </TouchableOpacity>
      </Container>

      <Container margin={{ bottom: 16 }}>
        <TouchableButton
          onPress={handleSubmit(onValid)}
          title={loading ? "????????? ???..." : "????????? ??????"}
          disabled={!watch("email") || !watch("password")}
          loading={loading}
        />
      </Container>
      <Container row margin={{ bottom: 33 }}>
        <TextLink
          onPress={() => navigation.navigate("SignUp")}
          desc="????????? ???????????????????"
          link="?????? ????????????"
        />
      </Container>
      <Container row>
        <Dog width={100} height={100} />
        <Cat width={100} height={100} />
      </Container>
      <Container>
        <ErrorModal
          error={networkError}
          content={`??????????????? ???????????? ???????????????.`}
          onClose={() => setNetworkError(false)}
        />
        <ErrorModal
          error={accountError}
          content={`????????? ????????? ???????????? ????????????.${"\n"}???????????? ??????????????? ??????????????????.`}
          onClose={() => setAccountError(false)}
        />
      </Container>
    </ScreenLayout>
  );
}
