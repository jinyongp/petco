import React, { useState } from "react";
import Picker, { IOption } from "react-native-modal-selector";
import styled from "styled-components/native";
import { DefaultContainer, Container } from "..";
import { PickerLabelProps } from "../@types";

const LabelContainer = styled(DefaultContainer)`
  margin-bottom: 10px;
  padding: 0 20px;
`;

const Label = styled.Text`
  align-self: flex-start;
  font-size: 14px;
`;

const PickerWrapper = styled.View`
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 0px 30px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  overflow: hidden;
`;

const InnerText = styled.Text`
  font-size: 15px;
`;

export default function PickerLabel({
  label,
  data,
  onChange,
}: PickerLabelProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <PickerWrapper>
        <Picker
          onChange={({ label: value }: IOption) => {
            setSelectedValue(value);
            onChange(value);
          }}
          animationType="none"
          cancelText="뒤로"
          initValueTextStyle={{ alignSelf: "flex-start" }}
          // overlayStyle={{ padding: "20%" }}
          selectStyle={{ borderColor: "transparent" }}
          selectTextStyle={{ alignSelf: "flex-start" }}
          optionTextStyle={{ color: "#333", fontSize: 20 }}
          optionStyle={{ padding: 20 }}
          cancelStyle={{
            borderRadius: 30,
            backgroundColor: "#fec544",
            width: 60,
            height: 40,
            alignSelf: "flex-end",
            justifyContent: "center",
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
            fontWeight: "bold",
          }}
          data={[{ section: true, label }, ...data].map(
            (origin: object, key: number) => ({
              ...origin,
              key,
            })
          )}
        >
          <InnerText style={{ color: selectedValue ? "#000" : "#00000030" }}>
            {selectedValue || "입력칸을 눌러 선택해주세요."}
          </InnerText>
        </Picker>
      </PickerWrapper>
    </Container>
  );
}
