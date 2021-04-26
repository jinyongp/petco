import React from "react";
import styled from "styled-components/native";
import { Container, ScreenLayout, TextInputIcon } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { elevation } from "../style/css";

const Header = styled.Text`
  font-size: 26px;
  font-weight: bold;
  align-self: flex-start;
`;

const SelectLocationButton = styled.TouchableOpacity`
  ${elevation}
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 56px;
  padding: 0px 30px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  margin-bottom: 14px;
`;

const LocationIcon = styled(Ionicons)`
  position: absolute;
  left: 30px;
`;

const Label = styled.Text`
  font-size: 15px;
`;

const SearchLocation = ({ navigation }) => {
  return (
    <ScreenLayout>
      <Container margin={{ bottom: 20 }}>
        <Header>{`지번, 도로명, 건물명을${"\n"}입력해 주세요.`}</Header>
      </Container>
      <Container>
        <TextInputIcon
          icon="search-outline"
          placeholder="예) 펫코동 14-5 또는 펫코아파트"
        />
      </Container>
      <Container>
        <SelectLocationButton>
          <LocationIcon name="locate-outline" size={24} />
          <Label>현재 위치로 주소찾기</Label>
        </SelectLocationButton>
      </Container>
    </ScreenLayout>
  );
};

export default SearchLocation;
