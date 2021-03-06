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
        {`???????????????${"\n"}???????????????`}
      </NanumText>

      <Container margin={{ bottom: 40 }} space={300}>
        <TextInputIcon
          Icon={Person}
          size={20}
          placeholder="????????? ????????? ?????????."
          returnKeyType="next"
          onSubmitEditing={onNext(emailRef)}
          onChangeText={onSetValue("username")}
        />
        <TextInputIcon
          Icon={Email}
          placeholder="???????????? ????????? ?????????."
          returnKeyType="next"
          keyboardType="email-address"
          inputRef={emailRef}
          onSubmitEditing={onNext(phoneRef)}
          onChangeText={onSetValue("email")}
        />
        <TextInputIcon
          Icon={Phone}
          placeholder="????????? ????????? ????????? ?????????."
          keyboardType="number-pad"
          returnKeyType="done"
          inputRef={phoneRef}
          onSubmitEditing={onNext(passwordRef)}
          onChangeText={onSetValue("phone_number")}
        />
        <TextInputIcon
          Icon={Lock}
          placeholder="??????????????? ????????? ?????????."
          returnKeyType="next"
          inputRef={passwordRef}
          onSubmitEditing={onNext(passwordCheckRef)}
          onChangeText={onSetValue("password")}
          secureTextEntry
        />
        <TextInputIcon
          Icon={Lock}
          placeholder="??????????????? ?????? ????????? ?????????."
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
          title={loading ? "???????????? ???..." : "???????????? ??????"}
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
          desc="?????? ???????????????????"
          link="????????? ??????"
        />
      </Container>
      <ErrorModal
        error={networkError}
        content={`??????????????? ???????????? ???????????????.`}
        onClose={() => setNetworkError(false)}
      />
      <ErrorModal
        error={alreadyExistError}
        content={`?????? ???????????? ???????????????.`}
        onClose={() => setAlreadyExistError(false)}
      />
      <ConfirmModal
        isVisible={completed}
        onClose={onCloseModal}
        LeftPetSvg={Dog}
        header="???????????? ??????"
        content={`??????????????? ?????????????????????!${"\n"}????????? ???????????? ????????? ????????????.`}
        buttonTitle="????????? ??????"
      />
    </ScreenLayout>
  );
}
