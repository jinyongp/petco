import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components/native";
import { useForm } from "react-hook-form";
import Dog from "../assets/icons/dog.svg";
import Cat from "../assets/icons/cat.svg";
import LeftDog from "../assets/animals/dog105.svg";
import RightCat from "../assets/animals/cat85.svg";
import { AuthLayout } from "../components/auth";
import {
  ConfirmModal,
  Container,
  TextInputLabel,
  NextButton,
} from "../components";
import { elevation } from "../style/css";

interface ButtonWrapperProps {
  readonly last?: boolean;
}

const ButtonWrapper = styled.View<ButtonWrapperProps>`
  align-items: center;
  justify-content: center;
  margin-right: ${({ last }) => (last ? 0 : 40)}px;
`;

const PetTypeButton = styled.TouchableOpacity`
  ${elevation}
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 111px;
  height: 111px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const PetTypeDesc = styled.Text`
  padding: 14px;
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

    setIsModalVisible(true);
  };
  const onSetValue = (name: string) => (text: string) => setValue(name, text);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const onCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate("Home");
  };

  return (
    <AuthLayout title={`등록할 동물을${"\n"}선택해 주세요.`}>
      <Container row margin={{ bottom: 50 }}>
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
      </Container>
      <Container margin={{ bottom: 30 }}>
        <TextInputLabel
          label="반려동물 이름"
          returnKeyType="next"
          onSubmitEditing={onNext(genderRef)}
          onChangeText={onSetValue("name")}
        />
      </Container>
      <Container margin={{ bottom: 30 }}>
        {/* FIXME Picker로 대체 */}
        <TextInputLabel
          label="성별"
          inputRef={genderRef}
          returnKeyType="next"
          onSubmitEditing={onNext(birthRef)}
          onChangeText={onSetValue("gender")}
        />
      </Container>
      <Container margin={{ bottom: 30 }}>
        {/* FIXME Picker로 대체 */}
        <TextInputLabel
          label="생년월일"
          inputRef={birthRef}
          returnKeyType="next"
          onSubmitEditing={onNext(weightRef)}
          onChangeText={onSetValue("birth")}
        />
      </Container>
      <Container margin={{ bottom: 30 }}>
        <TextInputLabel
          label="몸무게"
          inputRef={weightRef}
          returnKeyType="next"
          onSubmitEditing={onNext(neutralizationRef)}
          onChangeText={onSetValue("weight")}
        />
      </Container>
      <Container margin={{ bottom: 30 }}>
        {/* FIXME Picker로 대체 */}
        <TextInputLabel
          label="중성화 여부"
          inputRef={neutralizationRef}
          returnKeyType="next"
          onSubmitEditing={onNext(vaccinationRef)}
          onChangeText={onSetValue("neutralization")}
        />
      </Container>
      <Container margin={{ bottom: 30 }}>
        {/* FIXME 데이터로 대체 */}
        <TextInputLabel
          label="기초 접종 여부"
          inputRef={vaccinationRef}
          returnKeyType="next"
          onChangeText={onSetValue("vaccination")}
        />
      </Container>
      <Container margin={{ top: 30 }}>
        <NextButton
          onPress={handleSubmit(onValid)}
          text="등록"
          disabled={false}
        />
      </Container>
      <Container>
        <ConfirmModal
          isVisible={isModalVisible}
          header="등록이 완료되었습니다!"
          content={`등록한 반려동물 내역은${"\n"}내 정보에서 확인할 수 있습니다.`}
          buttonText="완료"
          onClose={onCloseModal}
          LeftPetSvg={LeftDog}
          RightPetSvg={RightCat}
        />
      </Container>
    </AuthLayout>
  );
};

export default RegisterPets;
