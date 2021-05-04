import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import Container from "../Container";
import PlainText from "../text/PlainText";
import { colors } from "../../style/colors";
import { DatePickerLabelProps } from "../@types";
import PropTypes from "prop-types";
import DatePickerModal from "../modal/DatePickerModal";

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
      <Container
        style={{ alignItems: "flex-start" }}
        margin={{ left: 20, bottom: 15 }}
      >
        <PlainText title={label} />
      </Container>
      <View style={styles.wrapper}>
        <Container row style={{ justifyContent: "space-between" }}>
          <Text
            style={[
              styles.input,
              { color: date ? colors.dark : colors.placeholder },
            ]}
          >
            {date ? printFormattedDate(date) : "오른쪽 달력에서 선택해주세요."}
          </Text>
          <TouchableOpacity onPress={() => setShow(true)}>
            <AntDesign name="calendar" size={25} />
          </TouchableOpacity>
        </Container>
        {Platform.OS === "android" && show && (
          <DatePicker
            value={date || new Date()}
            mode="date"
            locale="ko_KR"
            display="spinner"
            style={{ height: 50, width: 230 }}
            onChange={(_, _date) => {
              _date && onChange(printFormattedDate(_date));
              _date && setDate(_date);
              setShow(false);
            }}
            minimumDate={new Date(1990, 0, 1)}
            maximumDate={new Date()}
          />
        )}
        {Platform.OS === "ios" && (
          <DatePickerModal
            isVisible={show}
            buttonTitle="선택"
            onChange={(_date) => {
              _date && onChange(printFormattedDate(_date));
              _date && setDate(_date);
            }}
            onClose={() => setShow(false)}
          />
        )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    width: "100%",
    height: 56,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 30,
    overflow: "hidden",
  },
  input: {
    fontSize: 15,
    fontFamily: "nanum-regular",
  },
});

DatePickerLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
