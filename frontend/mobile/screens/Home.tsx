import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Estimate from "../assets/icons/estimate.svg";
import Stethoscope from "../assets/icons/stethoscope.svg";
import Ads from "../assets/images/ads.png";
import Search from "../assets/icons/search.svg";
import {
  ButtonTitle,
  Container,
  MainTitle,
  PlainText,
  ScreenLayout,
  TextInputIcon,
  TouchableContainer,
} from "../components";

export default function Home(): JSX.Element {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <Container
        style={{ alignItems: "flex-start" }}
        margin={{ top: 30, bottom: 27 }}
      >
        <MainTitle title={`서강준님${"\n"}안녕하세요!`} />
      </Container>

      <Container margin={{ bottom: 27 }}>
        <TextInputIcon Icon={Search} returnKeyType="done" blurOnSubmit />
      </Container>

      <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 18 }}>
        <PlainText title="어떤 서비스를 원하시나요?" />
      </Container>

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
          <ButtonTitle title="견적 신청하기" />
        </TouchableContainer>

        <TouchableContainer width={140} height={140} onPress={() => {}}>
          <Stethoscope width={44} height={57} style={{ marginBottom: 24 }} />
          <ButtonTitle title="예약 신청하기" />
        </TouchableContainer>
      </Container>

      <Container>
        <Image source={Ads} />
      </Container>
    </ScreenLayout>
  );
}
