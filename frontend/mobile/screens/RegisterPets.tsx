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
import { DatePickerLabel, PickerLabel } from "../components/picker";

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
  right: 50px;
  top: 43px;
  font-size: 15px;
`;

const PetTypeDesc = styled.Text`
  padding: 14px;
`;

// TODO validation check
const RegisterPets = () => {
  const navigation = useNavigation();
  const [weightOver, setWeightOver] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const { register, handleSubmit, setValue, watch, getValues } = useForm();
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
            placeholder="이름을 입력해주세요."
            onChangeText={onSetValue("name")}
            blurOnSubmit
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <PickerLabel
            label="성별"
            onChange={onSetValue("gender")}
            data={[{ label: "수컷(남)" }, { label: "암컷(여)" }]}
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <DatePickerLabel label="생년월일" onChange={onSetValue("birth")} />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <TextInputLabel
            label="몸무게"
            value={watch("weight")}
            placeholder="몸무게를 입력해주세요."
            returnKeyType="done"
            keyboardType="decimal-pad"
            onChangeText={onSetValue("weight")}
            error={(() => {
              if (weightOver) return "너무 큰 숫자가 입력되었습니다.";
              if (weightError) return "올바르지 않은 형식입니다.";
            })()}
            blurOnSubmit
            onBlur={() => {
              const { weight } = getValues();
              const w = parseFloat(weight);
              if (w > 150) {
                setWeightOver(true);
                setWeightError(false);
              } else if (isNaN(w)) {
                setWeightError(true);
                setWeightOver(false);
              } else {
                setWeightError(false);
                setWeightOver(false);
                setValue("weight", String(w.toFixed(1)));
              }
            }}
          />
          <WeightUnit>kg</WeightUnit>
        </Container>
        <Container margin={{ bottom: 30 }}>
          <PickerLabel
            label="중성화 여부"
            data={[{ label: "네" }, { label: "아니요" }]}
            onChange={onSetValue("neutralization")}
          />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <PickerLabel
            label="기초 접종 여부"
            data={[{ label: "네" }, { label: "아니요" }, { label: "몰라요" }]}
            onChange={onSetValue("vaccination")}
          />
        </Container>
        <Container margin={{ top: 30 }}>
          <NextButton
            onPress={handleSubmit(onValid)}
            text="등록"
            disabled={
              !watch("name") ||
              !watch("gender") ||
              !watch("birth") ||
              !watch("weight") ||
              !watch("neutralization") ||
              !watch("vaccination") ||
              weightError ||
              weightOver
            }
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
