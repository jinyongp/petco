import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const InputWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 56px;
  padding: 0px 80px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  margin-bottom: 14px;
`;

export default function TextInputIcon({ icon, size, color, children }) {
  return (
    <InputWrapper>
      <Ionicons
        style={{ position: "absolute", left: 30 }}
        name={icon}
        size={size}
        color={color}
      />
      {children}
    </InputWrapper>
  );
}

TextInputIcon.defaultProps = {
  size: 24,
  color: "black",
};
