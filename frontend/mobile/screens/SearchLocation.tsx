import React from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../assets/icons/search.svg";
import Location from "../assets/icons/location.svg";
import {
  Container,
  MainTitle,
  PlainText,
  ScreenLayout,
  TextInputIcon,
  TouchableContainer,
} from "../components";

export default function SearchLocation(): JSX.Element {
  const navigation = useNavigation();
  return (
    <ScreenLayout align="flex-start">
      <Container style={{ alignItems: "flex-start" }} margin={{ bottom: 27 }}>
        <MainTitle title={`견적을 받고 싶은${"\n"}주소를 검색해주세요!`} />
      </Container>
      <Container margin={{ bottom: 15 }}>
        <TextInputIcon
          Icon={Search}
          placeholder="예) 펫코동 14-5 또는 펫코아파트"
        />
      </Container>
      <Container>
        <TouchableContainer
          row
          onPress={() => navigation.navigate("SelectLocation")}
        >
          <Location
            style={{ position: "absolute", left: 20 }}
            width={25}
            height={25}
          />
          <PlainText title="현재 위치로 주소 찾기" />
        </TouchableContainer>
      </Container>
    </ScreenLayout>
  );
}
