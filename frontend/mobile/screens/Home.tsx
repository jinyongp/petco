import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Estimate from "../assets/icons/estimate.svg";
import Stethoscope from "../assets/icons/stethoscope.svg";
import Ads from "../assets/images/ads.png";
import Search from "../assets/icons/search.svg";
import {
  ConfirmModal,
  Container,
  NanumText,
  ScreenLayout,
  TextInputIcon,
  TouchableContainer,
} from "../components";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import Cat from "../assets/animals/cat100.svg";

const PET_PROFILE = gql`
  query PetProfile {
    petProfile {
      ok
      pets {
        id
      }
      status
    }
  }
`;

const USER_PROFILE = gql`
  query Profile {
    profile {
      ok
      user {
        username
      }
    }
  }
`;

export default function Home(): JSX.Element {
  const navigation = useNavigation();
  const { loading: userLoading, data: userData } = useQuery(USER_PROFILE);
  const [getPets, { loading, data, error }] = useLazyQuery(PET_PROFILE);
  const [isPets, setIsPets] = useState(false);

  useEffect(() => getPets(), []);
  useEffect(() => {
    if (Array.isArray(data?.petProfile.pets)) {
      setIsPets(!data?.petProfile.pets.length);
    }
  }, [data]);

  return (
    <ScreenLayout loading={loading || userLoading}>
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

        <TouchableContainer
          width={140}
          height={140}
          onPress={() => navigation.navigate("VeterinaryCareList")}
        >
          <Stethoscope width={44} height={57} style={{ marginBottom: 24 }} />
          <NanumText position="center" type="button">
            예약 신청하기
          </NanumText>
        </TouchableContainer>
      </Container>

      <Container>
        <Image source={Ads} />
      </Container>
      <ConfirmModal
        isVisible={isPets}
        buttonTitle="등록하기"
        header="등록된 동물이 없습니다"
        content={`반려동물 등록 후${"\n"}병원 예약을 진행해주세요!`}
        LeftPetSvg={Cat}
        onClose={() => {
          setIsPets(false);
          navigation.navigate("RegisterPets");
        }}
      />
    </ScreenLayout>
  );
}
