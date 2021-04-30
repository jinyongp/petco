import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Container from "../Container";
import { TextInputLabelProps } from "../@types";
import DefaultContainer from "../DefaultContainer";

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

const InputWrapper = styled.View`
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 0px 30px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;

const InnerErrorMsg = styled.Text`
  font-size: 13px;
  color: #ff0000aa;
`;

const InnerTextInput = styled.TextInput`
  font-size: 15px;
`;

export default function TextInputLabel({
  label,
  error,
  value,
  inputRef,
  onBlur,
  onFocus,
  placeholder,
  returnKeyType,
  blurOnSubmit,
  keyboardType,
  onSubmitEditing,
  onChangeText,
}: TextInputLabelProps): JSX.Element {
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
        <InnerErrorMsg>{error}</InnerErrorMsg>
      </LabelContainer>
      <InputWrapper style={{ borderColor: error ? "#ff000066" : "#c4c4c4" }}>
        <InnerTextInput
          ref={inputRef}
          value={value}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          clearTextOnFocus={Boolean(error)}
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          placeholder={placeholder}
          placeholderTextColor="#00000030"
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputWrapper>
    </Container>
  );
}

TextInputLabel.defaultProps = {
  error: "",
  blurOnSubmit: false,
  returnKeyType: "next",
};

TextInputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  inputRef: PropTypes.any,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};
