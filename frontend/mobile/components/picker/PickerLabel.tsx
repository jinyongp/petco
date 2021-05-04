import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Picker, { IOption } from "react-native-modal-selector";
import { colors } from "../../style/colors";
import Container from "../Container";
import { PickerLabelProps } from "../@types";
import NanumText from "../text/NanumText";

export default function PickerLabel({
  label,
  data,
  onChange,
}: PickerLabelProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <Container>
      <NanumText margin={{ left: 15, bottom: 15 }}>{label}</NanumText>
      <View style={styles.wrapper}>
        <Picker
          onChange={({ label: value }: IOption) => {
            setSelectedValue(value);
            onChange(value);
          }}
          animationType="none"
          cancelText="뒤로"
          initValueTextStyle={{
            alignSelf: "flex-start",
            fontFamily: "nanum-regular",
          }}
          // overlayStyle={{ padding: "20%" }}
          selectStyle={{ borderColor: "transparent" }}
          selectTextStyle={{
            alignSelf: "flex-start",
            fontFamily: "nanum-regular",
          }}
          optionTextStyle={{
            color: "#333",
            fontSize: 20,
            fontFamily: "nanum-regular",
          }}
          optionStyle={{ padding: 20 }}
          cancelStyle={{
            borderRadius: 30,
            backgroundColor: "#fec544",
            width: 60,
            height: 40,
            alignSelf: "flex-end",
            justifyContent: "center",
          }}
          cancelTextStyle={{
            fontSize: 15,
            fontFamily: "nanum-bold",
          }}
          optionContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: 20,
            borderWidth: 1,
          }}
          sectionStyle={{
            backgroundColor: "#fec544",
            borderRadius: 30,
          }}
          sectionTextStyle={{
            color: "#333",
            fontSize: 20,
            fontFamily: "nanum-bold",
          }}
          data={[{ section: true, label }, ...data].map(
            (origin: object, key: number) => ({
              ...origin,
              key,
            })
          )}
        >
          <Text
            style={[
              styles.input,
              { color: selectedValue ? colors.dark : colors.placeholder },
            ]}
          >
            {selectedValue || "입력칸을 눌러 선택해주세요."}
          </Text>
        </Picker>
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
  },
  input: {
    fontSize: 15,
    fontFamily: "nanum-regular",
  },
});
