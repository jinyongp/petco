import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { Container, ScreenLayout } from "../components";
import { ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import navi from "../assets/images/navi.png";
import choco from "../assets/images/choco.png";
import { elevation } from "../style/css";

const HeaderText = styled.Text`
  align-self: flex-start;
  font-size: 26px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const ImageWrapper = styled.View`
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 30px;
  margin-right: 20px;
`;

const InnerText = styled.Text`
  font-size: 18px;
`;

const PetSelectButton = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  margin-top: 10px;
`;

const PetImage = styled.Image`
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
`;

const PetName = styled.Text`
  margin-bottom: 10px;
`;

const SettingButton = styled.TouchableOpacity`
  margin-right: 10px;
  background-color: #fec544;
  padding: 5px 20px;
  border-radius: 20px;
`;

const PetDeleteButton = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  right: -5px;
  top: -5px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #fec544;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const PetRegisterIcon = styled.View`
  ${elevation}
  width: 80px;
  height: 80px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

const userPets = [
  {
    name: "초코",
    profile: choco,
  },
  {
    name: "초코",
    profile: choco,
  },
  {
    name: "나비",
    profile: navi,
  },
  {
    name: "나비",
    profile: navi,
  },
];

export default function MyPage() {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [option, setOption] = useState(true);
  return (
    <ScreenLayout>
      <Container margin={{ top: 40, bottom: 20 }}>
        <Container margin={{ bottom: 28 }} padding={{ left: 10 }}>
          <HeaderText>{`${"서강준"}님,${"\n"}안녕하세요.`}</HeaderText>
        </Container>
        <Container margin={{ bottom: 10 }}>
          <Button>
            <ImageWrapper></ImageWrapper>
            <InnerText>내 정보</InnerText>
          </Button>
          <Button>
            <ImageWrapper></ImageWrapper>
            <InnerText>내 견적</InnerText>
          </Button>
          <Button>
            <ImageWrapper></ImageWrapper>
            <InnerText>내 예약</InnerText>
          </Button>
        </Container>
      </Container>
      <Container>
        <Container
          row
          margin={{ bottom: 20 }}
          padding={{ left: 10, right: 10 }}
          style={{ justifyContent: "space-between" }}
        >
          <HeaderText>{`${"서강준"}님의${"\n"}반려동물`}</HeaderText>
          {option ? (
            <TouchableOpacity onPress={() => setOption(false)}>
              <Ionicons name="settings-outline" size={25} />
            </TouchableOpacity>
          ) : (
            <SettingButton onPress={() => setOption(true)}>
              <InnerText>완료</InnerText>
            </SettingButton>
          )}
        </Container>
        <Container row>
          <ScrollView
            horizontal
            ref={scrollViewRef}
            onContentSizeChange={(x) =>
              scrollViewRef?.current?.scrollTo({ x, animated: false })
            }
          >
            {userPets?.map(({ name, profile }, index) => (
              <PetSelectButton disabled key={index}>
                {option || (
                  <PetDeleteButton
                    onPress={() => {
                      /* TODO Delete a pet */
                    }}
                  >
                    <Ionicons name="close" size={25} />
                  </PetDeleteButton>
                )}
                <PetImage source={profile} width={80} height={80} />
                <PetName>{name}</PetName>
              </PetSelectButton>
            ))}
            {option || (
              <PetSelectButton
                onPress={() => navigation.navigate("RegisterPets")}
              >
                <PetRegisterIcon>
                  <Ionicons name="add-outline" size={50} color="#555" />
                </PetRegisterIcon>
              </PetSelectButton>
            )}
          </ScrollView>
        </Container>
      </Container>
    </ScreenLayout>
  );
}
