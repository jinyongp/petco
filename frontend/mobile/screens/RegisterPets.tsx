import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Dog from "../assets/icons/dog.svg";
import WhiteDog from "../assets/icons/dog-white.svg";
import Cat from "../assets/icons/cat.svg";
import WhiteCat from "../assets/icons/cat-white.svg";
import LeftDog from "../assets/animals/dog105.svg";
import RightCat from "../assets/animals/cat85.svg";
import {
  ConfirmModal,
  Container,
  DatePickerLabel,
  NanumText,
  PickerLabel,
  ScreenLayout,
  TextInputLabel,
  TouchableButton,
  TouchableContainer,
} from "../components";
import { gql } from "@apollo/client";

// // TODO validation check
export default function RegisterPets(): JSX.Element {
  const navigation = useNavigation();
  const [weightOver, setWeightOver] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const { register, handleSubmit, setValue, watch, getValues } = useForm();
  useEffect(() => {
    register("type");
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

  const dog = watch("type") === "dog";
  const cat = watch("type") === "cat";

  return (
    <ScreenLayout>
      <NanumText type="header" margin={{ bottom: 30 }}>
        반려동물 등록하기
      </NanumText>
      <Container row margin={{ bottom: 30 }}>
        <Container style={{ width: "auto" }} margin={{ right: 35 }}>
          <TouchableContainer
            width={140}
            height={140}
            onPressIn={() => onSetValue("type")("dog")}
            loading={dog}
          >
            {dog ? (
              <WhiteDog width={80} height={58} />
            ) : (
              <Dog width={80} height={58} />
            )}
          </TouchableContainer>
          <Container margin={{ top: 15 }}>
            <NanumText position="center" weight={dog ? "bold" : "regular"}>
              강아지
            </NanumText>
          </Container>
        </Container>
        <Container style={{ width: "auto" }}>
          <TouchableContainer
            width={140}
            height={140}
            onPressIn={() => onSetValue("type")("cat")}
            loading={cat}
          >
            {cat ? (
              <WhiteCat width={80} height={58} />
            ) : (
              <Cat width={80} height={58} />
            )}
          </TouchableContainer>
          <Container margin={{ top: 15 }}>
            <NanumText position="center" weight={cat ? "bold" : "regular"}>
              고양이
            </NanumText>
          </Container>
        </Container>
      </Container>
      <Container>
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
        <Container margin={{ top: 20, bottom: 30 }}>
          <TouchableButton
            title="등록 완료"
            onPress={handleSubmit(onValid)}
            disabled={
              !watch("type") ||
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
            buttonTitle="완료"
            onClose={onCloseModal}
            LeftPetSvg={LeftDog}
            RightPetSvg={RightCat}
          />
        </Container>
      </Container>
    </ScreenLayout>
  );
}
