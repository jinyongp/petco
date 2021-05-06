import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Container, NanumText, ScreenLayout, TouchableButton } from "../components";
import { ParamList } from "./@types";

const { width, height } = Dimensions.get("screen");
const ASPECT_RATIO = width / (height / 2);

const LATITUDE_DELTA = 0.0992;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function SelectLocation(): JSX.Element {
  const { params } = useRoute<RouteProp<ParamList, "SelectLocation">>();
  const [initialPosition, setInitialPosition] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(params);
    setInitialPosition({
      latitude: params?.latitude || 37.5142135,
      longitude: params?.longitude || 127.0016985,
    });
    setTimeout(setLoading, 100, false);
  }, []);

  if (loading) {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <ScreenLayout align="flex-start">
        <Container margin={{ bottom: 30 }}>
          <MapView
            style={{
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").height / 2,
            }}
            showsMyLocationButton={true}
            loadingEnabled={true}
            region={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.latitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker
              coordinate={{
                latitude: initialPosition.latitude,
                longitude: initialPosition.longitude,
              }}
            />
          </MapView>
        </Container>
        <Container>
          <NanumText type="title" margin={{ bottom: 10 }}>
            역삼 럭키 아파트
          </NanumText>
          <NanumText margin={{ bottom: 20 }}>서울특별시 강남구 논현로 290</NanumText>
        </Container>
        <Container>
          <TouchableButton
            title="이 위치로 설정하기"
            onPress={() => navigation.navigate("MedicalSearch")}
          />
        </Container>
      </ScreenLayout>
    );
  }
}
