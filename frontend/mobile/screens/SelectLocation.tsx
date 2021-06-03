import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  NanumText,
  ScreenLayout,
  TouchableButton,
  TouchableContainer,
} from "../components";
import * as Location from "expo-location";
import LocationSVG from "../assets/icons/location.svg";
import { colors } from "../style/colors";
import { Ionicons } from "@expo/vector-icons";
import { usePlaceSearchAsync } from "../hooks";
import { CoordinationType } from "../@types";
import Cat from "../assets/animals/cat99.svg";

const { width, height } = Dimensions.get("screen");
const calculatedHeight = height - height * 0.49;
const ASPECT_RATIO = width / calculatedHeight;

const LATITUDE_DELTA = 0.000522;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const RADIUS = 2000;

export default function SelectLocation(): JSX.Element {
  const mapRef = useRef<MapView>();
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA / 10,
    longitudeDelta: LONGITUDE_DELTA / 10,
  });
  const [places, setPlaces] = useState([]);
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState(false);
  const requestPlacesAsync = usePlaceSearchAsync();

  const focusInitialMarker = (animated: boolean) => {
    mapRef?.current?.fitToSuppliedMarkers(["initialMarker"], { animated });
  };

  const focusFitToPlaces = (places: CoordinationType[], animated = false) => {
    mapRef.current?.fitToCoordinates(places, { animated });
  };

  const getCurrentLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    return coords;
  };

  useEffect(() => {
    (async () => {
      // const { latitude, longitude } = await getCurrentLocation();
      const latitude = 37.495618;
      const longitude = 127.039491;
      // setRegion({ ...region, latitude, longitude });
      const results = await requestPlacesAsync(
        { latitude, longitude },
        RADIUS,
        "veterinary_care"
      );
      setData(results);
      setCompleted(true);
    })();
  }, []);

  useEffect(() => {
    const locations = data?.map(({ geometry: { location } }) => ({
      latitude: location.lat,
      longitude: location.lng,
    }));
    setPlaces(locations);
  }, [data]);

  if (!completed) {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <ActivityIndicator />
        <NanumText type="title" position="center" margin={{ top: 30 }}>
          검색 중...
        </NanumText>
      </Container>
    );
  } else if (data.length === 0) {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Cat width={100} height={100} />
        <NanumText type="title" position="center">
          근처에 검색되는 동물병원이 없어요.
        </NanumText>
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
            loadingEnabled
            rotateEnabled={false}
            initialRegion={region}
            onMapReady={() => focusFitToPlaces(places)}
          >
            {/* <Marker
              identifier="initialMarker"
              coordinate={{
                latitude: params.latitude,
                longitude: params.longitude,
              }}
            >
              <Ionicons name="location" size={30} color={colors.blue} />
            </Marker> */}
            <Circle center={region} radius={RADIUS} />
            {data?.map(
              ({ geometry: { location }, name, vicinity, place_id }) => (
                <Marker
                  key={place_id}
                  identifier={String(place_id)}
                  coordinate={{
                    latitude: location.lat,
                    longitude: location.lng,
                  }}
                >
                  <Ionicons name="location" size={30} color={colors.red} />
                  <Callout
                    tooltip
                    style={{
                      flex: 1,
                      position: "relative",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Container
                      style={{
                        borderColor: colors.yellow,
                        borderWidth: 1,
                        borderRadius: 10,
                        backgroundColor: "white",
                      }}
                      padding={10}
                    >
                      <NanumText>{name}</NanumText>
                      <NanumText type="tiny">{vicinity}</NanumText>
                    </Container>
                  </Callout>
                </Marker>
              )
            )}
          </MapView>
        </Container>
        <Container
          style={{
            position: "absolute",
            width: "auto",
            right: 10,
            top: -1,
          }}
        >
          <NanumText>검색한 동물병원: {data.length} 곳</NanumText>
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
            onPress={() => focusFitToPlaces(places, true)}
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
