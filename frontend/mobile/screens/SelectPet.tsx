import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { DefaultContainer, ScrollContainer } from "../components";
import { elevation } from "../style/css";
import navi from "../assets/images/navi.png";
import choco from "../assets/images/choco.png";

interface ImageProps {
  readonly source: string;
}

const Container = styled(DefaultContainer)`
  flex: 1;
  padding: 30px 0px 30px 0px;
`;

const HeaderContainer = styled(DefaultContainer)`
  margin-bottom: 50px;
`;

const Header = styled.Text`
  font-size: 20px;
`;

const PetList = styled(DefaultContainer)`
  margin-bottom: 0px;
`;

const PetContainer = styled.TouchableOpacity`
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
      <Container>
        <HeaderContainer>
          <Header>진료받을 반려동물을 선택해 주세요.</Header>
        </HeaderContainer>
        <PetList>
          {userPets.map(({ name, birth, profile }, index) => (
            <PetContainer onPress={goToSearchLocation} key={index}>
              <ProfileWrapper>
                <Profile source={profile} />
              </ProfileWrapper>
              <VerticalView>
                <Name>{name}</Name>
                <Birth>생년월일: {birth}</Birth>
              </VerticalView>
            </PetContainer>
          ))}
          <PetContainer onPress={goToRegisterPets}>
            <Ionicons name="add-sharp" size={45} />
          </PetContainer>
        </PetList>
      </Container>
    </ScrollContainer>
  );
};

export default SelectPet;
