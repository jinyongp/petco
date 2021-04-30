import React, { useState } from "react";
import styled from "styled-components/native";
import DatePicker from "@react-native-community/datetimepicker";
import { Container, DefaultContainer } from "..";
import { AntDesign } from "@expo/vector-icons";
import { DatePickerLabelProps } from "../@types";
import PropTypes from "prop-types";

const LabelContainer = styled(DefaultContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
`;

const Label = styled.Text`
  font-size: 14px;
`;

const DateField = styled.Text`
  font-size: 15px;
`;

const ShowButton = styled.TouchableOpacity``;

const PickerWrapper = styled.View`
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 0px 30px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  overflow: hidden;
`;

export default function DatePickerLabel({
  label,
  onChange,
}: DatePickerLabelProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(null);
  const printFormattedDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = date.getFullYear();

    return yyyy + "년 " + mm + "월 " + dd + "일 ";
  };

  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <PickerWrapper>
        {show || (
          <Container row style={{ justifyContent: "space-between" }}>
            <DateField style={{ color: date ? "#000" : "#00000030" }}>
              {date
                ? printFormattedDate(date)
                : "오른쪽 달력에서 선택해주세요."}
            </DateField>
            <ShowButton onPress={() => setShow(true)}>
              <AntDesign name="calendar" size={25} />
            </ShowButton>
          </Container>
        )}
        {show && (
          <DatePicker
            value={date || new Date()}
            mode="date"
            locale="ko_KR"
            display="spinner"
            style={{ backgroundColor: "#fff", height: 60 }}
            onChange={(_, date) => {
              date && onChange(String(date));
              date && setDate(date);
              setShow(false);
            }}
            minimumDate={new Date(1990, 0, 1)}
            maximumDate={new Date()}
          />
        )}
      </PickerWrapper>
    </Container>
  );
}

DatePickerLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
