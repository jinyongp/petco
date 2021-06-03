import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import DataPicker from "@react-native-community/datetimepicker";
import {
  Container,
  DatePickerModal,
  NanumText,
  PetSummary,
  ScreenLayout,
} from "../components";
import choco from "../assets/images/choco.png";

export default function Reservation(): JSX.Element {
  const { params } = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScreenLayout>
      <NanumText type="header">예약 날짜를 선택해주세요.</NanumText>
      <PetSummary
        info={{
          name: "초코",
          profile: choco,
          birth: "2013.03.17",
        }}
      />
      {/* <Container>
        <DataPicker
          value={new Date()}
          mode="date"
          locale="ko"
          display="inline"
        />
      </Container> */}
    </ScreenLayout>
  );
}
