import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 18px;
  font-size: 14px;
`;

const InputWrapper = styled.View`
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 0px 30px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;

export default function TextInputIcon({ label, children }) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>{children}</InputWrapper>
    </Container>
  );
}
