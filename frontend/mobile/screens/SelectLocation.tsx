import React from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  MainName,
  PlainText,
  ScreenLayout,
  TouchableButton,
} from "../components";

export default function SelectLocation() {
  const navigation = useNavigation();
  return (
    <ScreenLayout align="flex-start">
      <Container margin={{ bottom: 30 }}>
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height / 2,
          }}
          initialRegion={{
            latitude: 37.5177,
            longitude: 127.0473,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.5177,
              longitude: 127.0473,
            }}
          />
        </MapView>
      </Container>
      <Container>
        <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 10 }}>
          <MainName title="역삼 럭키 아파트" />
        </Container>
        <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 20 }}>
          <PlainText title="서울특별시 강남구 논현로 290" />
        </Container>
      </Container>
      <Container>
        <TouchableButton title="이 위치로 설정하기" />
      </Container>
    </ScreenLayout>
  );
}
