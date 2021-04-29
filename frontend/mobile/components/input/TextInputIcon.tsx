import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { TextInputIconProps } from "../@types";

const InputWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 0px 80px 0px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  margin-bottom: 14px;
`;

const InnerTextInput = styled.TextInput`
  flex: 1;
  left: 40px;
  font-size: 15px;
`;

export default function TextInputIcon({
  icon,
  size,
  color,
  value,
  inputRef,
  placeholder,
  returnKeyType,
  blurOnSubmit,
  keyboardType,
  onChangeText,
  onSubmitEditing,
  secureTextEntry,
}: TextInputIconProps): JSX.Element {
  return (
    <InputWrapper>
      <Ionicons
        style={{ position: "absolute", left: 30 }}
        name={icon}
        size={size}
        color={color}
      />
      <InnerTextInput
        ref={inputRef}
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="off"
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        placeholder={placeholder}
        placeholderTextColor="#777"
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </InputWrapper>
  );
}

TextInputIcon.defaultProps = {
  size: 24,
  color: "black",
  blurOnSubmit: false,
  returnKeyType: "next",
};

TextInputIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  value: PropTypes.string,
  color: PropTypes.string,
  inputRef: PropTypes.any,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};
