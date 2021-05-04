import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Estimate from "../assets/icons/estimate.svg";
import Stethoscope from "../assets/icons/stethoscope.svg";
import Ads from "../assets/images/ads.png";
import Search from "../assets/icons/search.svg";
import {
  Container,
  NanumText,
  ScreenLayout,
  TextInputIcon,
  TouchableContainer,
} from "../components";

export default function Home(): JSX.Element {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <NanumText type="header" margin={{ top: 30, bottom: 27 }}>
        {`서강준님${"\n"}안녕하세요!`}
      </NanumText>

      <Container margin={{ bottom: 27 }}>
        <TextInputIcon Icon={Search} returnKeyType="done" blurOnSubmit />
      </Container>

      <NanumText type="plain" margin={{ bottom: 18 }}>
        어떤 서비스를 원하시나요?
      </NanumText>

      <Container
        row
        margin={{ bottom: 22 }}
        style={{ justifyContent: "space-between", width: 300 }}
      >
        <TouchableContainer
          width={140}
          height={140}
          onPress={() => navigation.navigate("SelectPet")}
        >
          <Estimate width={44} height={57} style={{ marginBottom: 24 }} />
          <NanumText position="center" type="button">
            견적 신청하기
          </NanumText>
        </TouchableContainer>

        <TouchableContainer width={140} height={140} onPress={() => {}}>
          <Stethoscope width={44} height={57} style={{ marginBottom: 24 }} />
          <NanumText position="center" type="button">
            예약 신청하기
          </NanumText>
        </TouchableContainer>
      </Container>

      <Container>
        <Image source={Ads} />
      </Container>
    </ScreenLayout>
  );
}
