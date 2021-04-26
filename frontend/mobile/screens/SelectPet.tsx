import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Container, DefaultContainer, ScrollContainer } from "../components";
import { elevation } from "../style/css";
import navi from "../assets/images/navi.png";
import choco from "../assets/images/choco.png";

interface ImageProps {
  readonly source: string;
}

const Header = styled.Text`
  font-size: 20px;
`;

const PetList = styled(DefaultContainer)`
  margin-bottom: 0px;
`;

const PetSelectButton = styled.TouchableOpacity`
  ${elevation}
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #ddd;
  flex-direction: row;
  padding: 15px;
  width: 320px;
  height: 130px;
  margin-bottom: 30px;
`;

const ProfileWrapper = styled.View`
  width: 100px;
  margin-right: 25px;
  border-radius: 100px;
`;

const Profile = styled(Image)<ImageProps>``;

const VerticalView = styled.View``;

const Name = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Birth = styled.Text``;

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
    profile: navi,
  },
  {
    name: "나비",
    birth: "2017.05.28",
    profile: navi,
  },
];

const SelectPet = ({ navigation }) => {
  const goToSearchLocation = () => navigation.navigate("SearchLocation");
  const goToRegisterPets = () => navigation.navigate("RegisterPets");

  return (
    <ScrollContainer>
      <Container padding={{ top: 30, bottom: 30 }}>
        <Container margin={{ bottom: 50 }}>
          <Header>진료받을 반려동물을 선택해 주세요.</Header>
        </Container>
        <PetList>
          {userPets.map(({ name, birth, profile }, index) => (
            <PetSelectButton onPress={goToSearchLocation} key={index}>
              <ProfileWrapper>
                <Profile source={profile} />
              </ProfileWrapper>
              <VerticalView>
                <Name>{name}</Name>
                <Birth>생년월일: {birth}</Birth>
              </VerticalView>
            </PetSelectButton>
          ))}
          <PetSelectButton onPress={goToRegisterPets}>
            <Ionicons name="add-sharp" size={45} />
          </PetSelectButton>
        </PetList>
      </Container>
    </ScrollContainer>
  );
};

export default SelectPet;
