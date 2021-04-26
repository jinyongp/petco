import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Container, DefaultContainer, ScreenLayout } from "../components";
import { TextInputIcon } from "../components/auth";
import EstimateSvg from "../assets/icons/estimate.svg";
import StethoscopeSvg from "../assets/icons/stethoscope.svg";
import ads from "../assets/images/ads.png";
import { elevation } from "../style/css";

interface ButtonProps {
  readonly last?: boolean;
}

interface AdsProps {
  readonly source: string;
}

const HeaderContainer = styled(DefaultContainer)`
  align-items: flex-start;
  margin: 30px 0px 34px 20px;
`;

const RowTextWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Username = styled.Text`
  font-size: 26px;
  font-weight: 700;
`;

const Welcome = styled.Text`
  font-size: 26px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  left: 40px;
`;

const Question = styled.Text`
  padding-bottom: 23px;
  transform: translateX(-75px);
`;

const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity<ButtonProps>`
  ${elevation}
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 144px;
  height: 144px;
  border: 1px solid #ddd;
  background-color: #fff;
  margin-right: ${({ last }) => (last ? 0 : 20)}px;
`;

const ButtonContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonDesc = styled.Text`
  margin-top: 20px;
`;

const AdsWrapper = styled.TouchableHighlight`
  border: #eee;
  width: 326px;
  height: 173px;
  border-radius: 30px;
`;

const Ads = styled(Image)<AdsProps>`
  width: 100%;
  border-radius: 30px;
`;

export default function Home({ navigation }) {
  const goToSelectPet = () => navigation.navigate("SelectPet");

  return (
    <ScreenLayout>
      <HeaderContainer>
        <RowTextWrapper>
          <Username>서강준</Username>
          <Welcome>님,</Welcome>
        </RowTextWrapper>
        <Welcome>안녕하세요!</Welcome>
      </HeaderContainer>
      <Container margin={{ marginBottom: 36 }}>
        <TextInputIcon icon="search-outline">
          <TextInput />
        </TextInputIcon>
      </Container>
      <Container margin={{ marginBottom: 22 }}>
        <Question>어떤 서비스를 원하시나요?</Question>
        <ButtonWrapper>
          <Button onPress={goToSelectPet}>
            <ButtonContent>
              <EstimateSvg width={50} height={50} />
              <ButtonDesc>견적 신청하기</ButtonDesc>
            </ButtonContent>
          </Button>
          <Button last>
            <ButtonContent>
              <StethoscopeSvg width={50} height={50} />
              <ButtonDesc>예정 신청하기</ButtonDesc>
            </ButtonContent>
          </Button>
        </ButtonWrapper>
      </Container>
      <Container margin={{ marginBottom: 30 }}>
        <AdsWrapper>
          <Ads source={ads} />
        </AdsWrapper>
      </Container>
    </ScreenLayout>
  );
}
