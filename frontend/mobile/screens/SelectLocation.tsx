import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Container, NextButton, ScreenLayout } from "../components";

const MapContainer = styled.View`
  width: ${Dimensions.get("screen").width}px;
  height: 400px;
  background-color: gray;
`;

const Building = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DetailAddress = styled.Text`
  align-self: flex-start;
  font-size: 18px;
`;

const SelectLocation = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout>
      <Container margin={{ bottom: 20 }}>
        {/* TODO MapView */}
        <MapContainer />
      </Container>
      <Container margin={{ bottom: 43 }}>
        <Building>역삼 럭키 아파트</Building>
        <DetailAddress>서울특별시 강남구 논현로 290</DetailAddress>
      </Container>
      <Container margin={{ bottom: 20 }}>
        <NextButton
          onPress={() => {}}
          text="이 위치로 설정하기"
          disabled={false}
        />
      </Container>
    </ScreenLayout>
  );
};

export default SelectLocation;
