import React, { useLayoutEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  NanumText,
  ScreenLayout,
  TouchableButton,
  TouchableContainer,
} from "../components";
import { ParamList } from "./@types";
import LocationSVG from "../assets/icons/location.svg";
import { colors } from "../style/colors";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const calculatedHeight = height - height * 0.49;
const ASPECT_RATIO = width / calculatedHeight;

const LATITUDE_DELTA = 0.992;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function SelectLocation(): JSX.Element {
  const mapRef = useRef<MapView>();
  const { params } = useRoute<RouteProp<ParamList, "SelectLocation">>();
  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const focusInitialMarker = (animated: boolean) => {
    mapRef?.current?.fitToSuppliedMarkers(["initialMarker"], {
      animated,
      edgePadding: {
        top: 150,
        left: 150,
        right: 150,
        bottom: 150,
      },
    });
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setInitialPosition(params);
      setLoading(false);
    }, 300);
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
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.maps}
            loadingEnabled={true}
            rotateEnabled={false}
            onMapReady={() => focusInitialMarker(false)}
            initialRegion={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.latitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker
              identifier="initialMarker"
              coordinate={{
                latitude: initialPosition.latitude,
                longitude: initialPosition.longitude,
              }}
            >
              <Ionicons name="location" size={30} color={colors.blue} />
            </Marker>
          </MapView>
        </Container>
        <Container
          row
          style={{
            position: "absolute",
            width: "auto",
            right: 10,
            top: calculatedHeight - 30,
          }}
        >
          <TouchableContainer
            width={40}
            height={40}
            onPress={() => focusInitialMarker(true)}
          >
            <LocationSVG width={20} height={20} />
          </TouchableContainer>
        </Container>
        <Container>
          <NanumText type="title" margin={{ bottom: 10 }}>
            역삼 럭키 아파트
          </NanumText>
          <NanumText margin={{ bottom: 20 }}>
            서울특별시 강남구 논현로 290
          </NanumText>
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

const styles = StyleSheet.create({
  maps: {
    width,
    height: calculatedHeight,
  },
});
