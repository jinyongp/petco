import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInputLabelProps } from "./@types";
import PropTypes from "prop-types";
import Container from "./Container";
import DefaultContainer from "./DefaultContainer";

const LabelContainer = styled(DefaultContainer)``;

const Label = styled.Text`
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 10px;
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

const InnerTextInput = styled.TextInput`
  font-size: 15px;
`;

export default function TextInputLabel({
  label,
  inputRef,
  placeholder,
  returnKeyType,
  blurOnSubmit,
  keyboardType,
  onSubmitEditing,
  onChangeText,
}: TextInputLabelProps): JSX.Element {
  const [focused, setFocused] = useState(false);
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <InputWrapper>
        <InnerTextInput
          ref={inputRef}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          placeholder={placeholder}
          placeholderTextColor="#777"
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </InputWrapper>
    </Container>
  );
}

TextInputLabel.defaultProps = {
  blurOnSubmit: false,
  returnKeyType: "next",
};

TextInputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.any,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};
