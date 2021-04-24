import React, { useRef, useState } from "react";
import { AuthLayout, AuthButton, TextInputLabel } from "../components/auth";
import styled from "styled-components/native";
import Dog from "../assets/icons/dog.svg";
import Cat from "../assets/icons/cat.svg";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SelectContainer = styled(Container)`
  margin-bottom: 50px;
  flex-direction: row;
`;

const InputContainer = styled(Container)`
  margin-bottom: 30px;
`;

const ButtonContainer = styled(Container)`
  margin-top: 30px;
  margin-bottom: 0px;
`;

const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${({ last }) => (last ? 0 : 40)}px;
`;

const PetTypeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 111px;
  height: 111px;
  border: 1px solid #ddd;
  background-color: #fff;
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: 0px 2px;
  shadow-radius: 3px;
  elevation: 5;
`;

const PetTypeDesc = styled.Text`
  padding: 14px;
`;

const TextInput = styled.TextInput`
  font-size: 15px;
`;

const RegisterPets = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("name");
    register("gender");
    register("birth");
    register("weight");
    register("neutralization");
    register("vaccination");
  }, [register]);

  const genderRef = useRef();
  const birthRef = useRef();
  const weightRef = useRef();
  const neutralizationRef = useRef();
  const vaccinationRef = useRef();
  const onNext = (nextRef) => () => {
    const { current }: any = nextRef;
    current?.focus();
  };
  const onValid = (data: object) => {
    console.log(data);
    // TODO validation
    navigation.navigate("Home");
  };
  const onSetValue = (name: string) => (text: string) => setValue(name, text);

  return (
    <AuthLayout title={`등록할 동물을${"\n"}선택해 주세요.`}>
      <SelectContainer>
        <ButtonWrapper>
          <PetTypeButton>
            <Dog width={65} height={65} />
          </PetTypeButton>
          <PetTypeDesc>강아지</PetTypeDesc>
        </ButtonWrapper>
        <ButtonWrapper last={true}>
          <PetTypeButton>
            <Cat width={65} height={65} />
          </PetTypeButton>
          <PetTypeDesc>고양이</PetTypeDesc>
        </ButtonWrapper>
      </SelectContainer>
      <InputContainer>
        <TextInputLabel label="반려동물 이름">
          <TextInput
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={onNext(genderRef)}
            onChangeText={onSetValue("name")}
          />
        </TextInputLabel>
      </InputContainer>
      <InputContainer>
        {/* FIXME Picker로 대체 */}
        <TextInputLabel label="성별">
          <TextInput
            ref={genderRef}
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={onNext(birthRef)}
            onChangeText={onSetValue("gender")}
          />
        </TextInputLabel>
      </InputContainer>
      <InputContainer>
        {/* FIXME Picker로 대체 */}
        <TextInputLabel label="생년월일">
          <TextInput
            ref={birthRef}
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={onNext(weightRef)}
            onChangeText={onSetValue("birth")}
          />
        </TextInputLabel>
      </InputContainer>
      <InputContainer>
        <TextInputLabel label="몸무게">
          <TextInput
            ref={weightRef}
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={onNext(neutralizationRef)}
            onChangeText={onSetValue("weight")}
          />
        </TextInputLabel>
      </InputContainer>
      <InputContainer>
        {/* FIXME Picker로 대체 */}
        <TextInputLabel label="중성화 여부">
          <TextInput
            ref={neutralizationRef}
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={onNext(vaccinationRef)}
            onChangeText={onSetValue("neutralization")}
          />
        </TextInputLabel>
      </InputContainer>
      <InputContainer>
        {/* FIXME 데이터로 대체 */}
        <TextInputLabel label="기초 접종 여부">
          <TextInput
            ref={vaccinationRef}
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={handleSubmit(onValid)}
            onChangeText={onSetValue("vaccination")}
          />
        </TextInputLabel>
      </InputContainer>
      <ButtonContainer>
        <AuthButton onPress={() => {}} text="등록" disabled={false} />
      </ButtonContainer>
    </AuthLayout>
  );
};

export default RegisterPets;
