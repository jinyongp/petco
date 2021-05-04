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

const userPets = [
  {
    name: "초코",
    birth: "2013.03.17",
    profile: choco,
  },
  {
    name: "초코",
    birth: "2013.03.17",
    profile: choco,
  },
  {
    name: "나비",
    birth: "2017.05.28",
  },
  {
    name: "나비",
    birth: "2017.05.28",
    profile: navi,
  },
];

export default function SelectPet(): JSX.Element {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <NanumText type="header" margin={{ bottom: 33 }}>
        {`진료받을 동물을${"\n"}선택해 주세요`}
      </NanumText>
      <Container>
        {userPets?.map(({ name, birth, profile }, index) => (
          <Container margin={{ bottom: 33 }} key={index}>
            <TouchableContainer
              width={320}
              height={130}
              onPress={() => navigation.navigate("SearchLocation")}
            >
              <PetSummary info={{ name, birth, profile }} />
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
