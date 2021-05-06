import React, { useEffect, useState } from "react";
import { ActivityIndicator, AppState, AppStateStatus, Linking, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchSVG from "../assets/icons/search.svg";
import LocationSVG from "../assets/icons/location.svg";
import * as Location from "expo-location";
import * as IntentLauncher from "expo-intent-launcher";
import {
  Container,
  NanumText,
  ScreenLayout,
  TextInputIcon,
  TouchableContainer,
} from "../components";
import { colors } from "../style/colors";

export default function SearchLocation(): JSX.Element {
  const navigation = useNavigation();
  const [locationService, setLocationService] = useState(false);
  const [askAgain, setAskAgain] = useState(true);
  const [loading, setLoading] = useState(false);
  const checkLocationServicesEnabled = (state: AppStateStatus) => {
    (async () => {
      if (state === "active") {
        setLocationService(await Location.hasServicesEnabledAsync());
      }
    })();
  };
  const checkLocationPermissionGranted = (state: AppStateStatus) => {
    (async () => {
      if (state === "active") {
        const { canAskAgain } = await Location.getForegroundPermissionsAsync();
        setAskAgain(canAskAgain);
      }
    })();
  };

  useEffect(() => {
    checkLocationServicesEnabled("active");
    AppState.addEventListener("change", checkLocationServicesEnabled);
    return () => AppState.removeEventListener("change", checkLocationServicesEnabled);
  }, []);

  useEffect(() => {
    if (locationService) {
      AppState.addEventListener("change", checkLocationPermissionGranted);
      return () => AppState.removeEventListener("change", checkLocationPermissionGranted);
    }
  }, [locationService]);

  const handleLocationPermission = async () => {
    const { canAskAgain, granted } = await Location.requestForegroundPermissionsAsync();
    setAskAgain(canAskAgain);

    if (granted) {
      try {
        setLoading(true);
        const { coords } = await Location.getCurrentPositionAsync();
        setLoading(false);
        return coords;
      } catch (error) {
        console.warn(error);
      }
    }
  };

  return (
    <ScreenLayout align="flex-start">
      <NanumText type="header" margin={{ bottom: 27 }}>
        {`견적을 받고 싶은${"\n"}주소를 검색해주세요!`}
      </NanumText>
      <Container margin={{ bottom: 15 }}>
        <TextInputIcon
          Icon={SearchSVG}
          returnKeyType="search"
          placeholder="예) 펫코동 14-5 또는 펫코아파트"
          blurOnSubmit
        />
      </Container>
      <Container>
        <TouchableContainer
          row
          disabled={!locationService || !askAgain}
          loading={loading}
          onPress={async () => {
            if (!loading) {
              const { latitude, longitude } = await handleLocationPermission();
              navigation.navigate("SelectLocation", { latitude, longitude });
            }
          }}
        >
          <LocationSVG style={{ position: "absolute", left: 20 }} width={25} height={25} />
          <NanumText position="center" type="button">
            현재 위치로 주소 찾기
          </NanumText>
          {loading && (
            <ActivityIndicator color={colors.blue} style={{ position: "absolute", right: 20 }} />
          )}
        </TouchableContainer>
        {locationService || (
          <Container margin={{ top: 10 }}>
            <NanumText size={10} color={colors.dark} position="center">
              현재 위치를 얻기 위해선 위치 서비스가 필요합니다
            </NanumText>
            <NanumText
              position="center"
              size={11}
              weight="bold"
              margin={{ top: 5 }}
              color={colors.yellow}
              onPress={() => {
                if (Platform.OS === "ios") {
                  Linking.openURL("App-Prefs:Privacy");
                } else {
                  IntentLauncher.startActivityAsync(IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS);
                }
              }}
            >
              위치 서비스 켜기
            </NanumText>
          </Container>
        )}
        <RequestPermission
          visible={locationService && !askAgain}
          desc="위치 서비스 권한이 필요합니다."
          link="권한 얻기"
          opPress={() => {
            if (Platform.OS === "ios") {
              Linking.openURL("app-settings:");
            } else {
              IntentLauncher.startActivityAsync(IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS);
            }
          }}
        />
      </Container>
    </ScreenLayout>
  );
}

function RequestPermission({ visible, desc, link, opPress }): JSX.Element {
  if (!visible) return null;

  return (
    <Container margin={{ top: 10 }}>
      <NanumText size={10} color={colors.dark} position="center">
        {desc}
      </NanumText>
      <NanumText
        position="center"
        size={11}
        weight="bold"
        margin={{ top: 5 }}
        color={colors.yellow}
        onPress={opPress}
      >
        {link}
      </NanumText>
    </Container>
  );
}
