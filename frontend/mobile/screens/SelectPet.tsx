import React from "react";
import { useNavigation } from "@react-navigation/native";
import navi from "../assets/images/navi.png";
import choco from "../assets/images/choco.png";
import Pow from "../assets/icons/paw.svg";
import {
  Container,
  NanumText,
  PetSummary,
  ScreenLayout,
  TouchableContainer,
} from "../components";
import { gql, useQuery } from "@apollo/client";

const PET_PROFILE = gql`
  query PetProfile {
    petProfile {
      ok
      pets {
        id
        name
        avatar
        birth
        type
      }
      status
    }
  }
`;

const userPets = [
  {
    id: 1,
    name: "초코",
    avatar: null,
    birth: "2017.02.12",
  },
];

export default function SelectPet(): JSX.Element {
  const navigation = useNavigation();
  const { loading, data } = useQuery(PET_PROFILE);

  return (
    <ScreenLayout loading={loading} align="flex-start">
      <NanumText type="header" margin={{ bottom: 33 }}>
        {`진료받을 동물을${"\n"}선택해 주세요`}
      </NanumText>
      <Container>
        {userPets?.map(({ id, name, birth, avatar, type }) => (
          <Container margin={{ bottom: 33 }} key={id}>
            <TouchableContainer
              width={320}
              height={130}
              onPress={() => navigation.navigate("SearchLocation")}
            >
              <PetSummary info={{ name, birth, avatar, type }} />
            </TouchableContainer>
          </Container>
        ))}
        <Container margin={{ bottom: 47 }}>
          <TouchableContainer
            width={320}
            height={130}
            onPress={() => navigation.navigate("RegisterPets")}
          >
            <Pow width={30} height={30} />
          </TouchableContainer>
        </Container>
      </Container>
    </ScreenLayout>
  );
}
