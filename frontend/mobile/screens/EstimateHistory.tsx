import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import {
  Container,
  NanumText,
  ScreenLayout,
  TouchableButton,
} from "../components";
import navi from "../assets/images/navi.png";
import choco from "../assets/images/choco.png";
import { useNavigation } from "@react-navigation/core";
import Dog from "../assets/icons/dog.svg";

type Status = "request" | "confirm" | "cancel";

type HistoryType = {
  id: number;
  name: string;
  status: Status;
  petImage: ImageSourcePropType;
  estimates: string[];
  location: string;
  date: string;
};

const history: HistoryType[] = [
  {
    id: 1,
    name: "초코",
    status: "request",
    petImage: null,
    estimates: ["슬개골 탈구", "중성화 수술(남아)"],
    location: "서울 강남구 역삼동",
    date: "2021.03.18",
  },
];

export default function EstimateHistory(): JSX.Element {
  const navigation = useNavigation();

  const getStatusText = (status: Status) => {
    if (status === "request") return "견적 요청 중...";
    if (status === "confirm") return "견적 요청 수락";
    if (status === "cancel") return "견적 요청 취소";
  };
  const abbrEstimate = (estimates: string[]) => {
    if (estimates.length > 1)
      return estimates[0] + " 외 " + (estimates.length - 1);
    return estimates[0];
  };

  return (
    <ScreenLayout align="flex-start">
      <Container>
        {history?.map(({ id, status, petImage, estimates, location, date }) => (
          <Container key={id} margin={{ bottom: 50 }}>
            <Container row style={{ justifyContent: "space-between" }}>
              <Container style={{ width: "auto" }} margin={{ bottom: 24 }}>
                <NanumText size="xs" margin={{ bottom: 5 }}>
                  {getStatusText(status)}
                </NanumText>
                <NanumText size="xl" weight="bold" margin={{ bottom: 10 }}>
                  {abbrEstimate(estimates)}
                </NanumText>
                <NanumText margin={{ bottom: 5 }}>{location}</NanumText>
                <NanumText>{date}</NanumText>
              </Container>
              <Container style={{ width: "auto" }}>
                {petImage ? (
                  <Image
                    source={petImage}
                    width={62}
                    height={62}
                    style={{ width: 62, height: 62 }}
                  />
                ) : (
                  <Dog width={62} height={62} />
                )}
              </Container>
            </Container>
            <TouchableButton
              title="자세히 보기"
              height={35}
              onPress={() => navigation.navigate("EstimateDetail")}
            />
          </Container>
        ))}
      </Container>
    </ScreenLayout>
  );
}
