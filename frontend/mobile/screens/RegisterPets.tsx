import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useForm } from "react-hook-form";
import { AuthLayout } from "../components/auth";
import { ConfirmModal, Container, NextButton } from "../components";
import { TextInputLabel } from "../components/input";
import { elevation } from "../style/css";
import Dog from "../assets/icons/dog.svg";
import Cat from "../assets/icons/cat.svg";
import LeftDog from "../assets/animals/dog105.svg";
import RightCat from "../assets/animals/cat85.svg";
import { PickerLabel } from "../components/picker";

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

const WeightUnit = styled.Text`
  position: absolute;
  right: 50;
  top: 43;
  font-size: 15px;
`;

const PetTypeDesc = styled.Text`
  padding: 14px;
`;

// TODO validation check
const RegisterPets = () => {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue, watch } = useForm();
  useEffect(() => {
    register("name");
    register("gender");
    register("birth");
    register("weight");
    register("neutralization");
    register("vaccination");
  }, [register]);

  const onValid = (data: object) => {
    console.log(data);
    // TODO validation

    setIsModalVisible(true);
  };
  const onSetValue = (name: string) => (text: string) => setValue(name, text);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const onCloseModal = () => {
    setIsModalVisible(false);
    navigation.goBack();
  };

  return (
    <AuthLayout title={`등록할 동물을${"\n"}선택해 주세요.`}>
      <Container margin={{ bottom: 60 }}>
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
            placeholder="이름"
            onChangeText={onSetValue("name")}
            blurOnSubmit
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <PickerLabel
            label="성별"
            onChange={({ label }) => onSetValue("gender")(label)}
            data={[{ label: "수컷(남)" }, { label: "암컷(여)" }]}
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          {/* FIXME Picker로 대체 */}
          <TextInputLabel
            label="생년월일"
            keyboardType="decimal-pad"
            onChangeText={onSetValue("birth")}
            blurOnSubmit
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <TextInputLabel
            label="몸무게"
            returnKeyType="done"
            keyboardType="decimal-pad"
            onChangeText={() => onSetValue("weight")}
            blurOnSubmit
          />
          <WeightUnit>kg</WeightUnit>
        </Container>
        <Container margin={{ bottom: 30 }}>
          <PickerLabel
            label="중성화 여부"
            data={[{ label: "네" }, { label: "아니요" }]}
            onChange={({ label }) => onSetValue("neutralization")(label)}
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <PickerLabel
            label="기초 접종 여부"
            data={[{ label: "네" }, { label: "아니요" }, { label: "몰라요" }]}
            onChange={({ label }) => onSetValue("vaccination")(label)}
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
      </Container>
    </AuthLayout>
  );
};

export default RegisterPets;
