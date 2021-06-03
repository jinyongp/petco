import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Container, NanumText, PetSummary, ScreenLayout } from "../components";
import Paw from "../assets/icons/paw.svg";
import Calendar from "../assets/icons/calendar-time.svg";
import MapMarker from "../assets/icons/map-marker.svg";
import { ParamList } from "./@types";
import Cat from "../assets/animals/cat99.svg";

type DetailType = {
  id: number;
  name: string;
  estimates: { id: number; estimate: string; price: string }[];
  totalPrice: string;
  location: string;
  date: string;
  petInfo: {
    name: string;
    type: "dog" | "cat";
    birth: string;
    avatar?: string;
  };
};

let details: DetailType[] = [
  {
    id: 1,
    name: "로얄 동물 메디컬 센터",
    estimates: [
      {
        id: 1,
        estimate: "혈액검사",
        price: "22,000 원",
      },
      {
        id: 2,
        estimate: "생화학 검사, 종합",
        price: "110,000 원",
      },
      {
        id: 3,
        estimate: "CRP 테스트",
        price: "33,000 원",
      },
    ],
    totalPrice: "165,000 원",
    date: "14시 30분",
    location: "서울 특별시 강남구 역삼 1동 도곡로 189",
    petInfo: {
      name: "초코",
      type: "dog",
      birth: "2017.02.12",
      avatar: null,
    },
  },
];

// details = []; // Uncomment this line to test this screen

export default function EstimateDetail(): JSX.Element {
  const { params } = useRoute<RouteProp<ParamList, "EstimateDetail">>();

  return (
    <ScreenLayout align="flex-start">
      <Container margin={{ bottom: 30 }}>
        <PetSummary
          info={{
            name: "초코",
            type: "dog",
            birth: "2017.02.12",
            avatar: null,
          }}
        />
      </Container>
      <Container>
        {!details?.length ? (
          <Container style={{ height: "50%" }}>
            <Cat width={100} height={100} />
            <NanumText type="title" position="center">
              아직 도착한 견적서가 없습니다.
            </NanumText>
          </Container>
        ) : (
          details?.map(
            ({ id, name, estimates, totalPrice, date, location, petInfo }) => (
              <Container
                key={id}
                style={{ borderRadius: 30, borderWidth: 1 }}
                padding={28}
                // margin={{ bottom: 30 }}
              >
                <NanumText type="button" margin={{ bottom: 28 }}>
                  {name}
                </NanumText>
                {estimates?.map(({ id, estimate, price }) => (
                  <Container
                    row
                    key={id}
                    margin={{ bottom: 10 }}
                    style={{ justifyContent: "space-between" }}
                  >
                    <NanumText>{estimate}</NanumText>
                    <NanumText position="flex-end">{price}</NanumText>
                  </Container>
                ))}
                <Container
                  row
                  style={{ justifyContent: "space-between", borderTopWidth: 1 }}
                  padding={11}
                  // margin={{ bottom: 13 }}
                >
                  <NanumText weight="bold">총 금액: </NanumText>
                  <NanumText weight="bold" position="flex-end">
                    {totalPrice}
                  </NanumText>
                </Container>
                {/* <Container>
                  <Container
                    row
                    margin={{ bottom: 10 }}
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Paw width={18} height={17} />
                    <NanumText margin={{ left: 10 }}>
                      예약 이름: {petInfo.name}
                    </NanumText>
                  </Container>
                  <Container
                    row
                    margin={{ bottom: 10 }}
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Calendar width={18} height={17} />
                    <NanumText margin={{ left: 10 }}>
                      예약 시간: {date}
                    </NanumText>
                  </Container>
                  <Container
                    row
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <MapMarker width={18} height={17} />
                    <NanumText margin={{ left: 10 }}>{location}</NanumText>
                  </Container>
                </Container> */}
              </Container>
            )
          )
        )}
      </Container>
    </ScreenLayout>
  );
}
