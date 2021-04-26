import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";

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

const InnerTextInput = styled.TextInput`
  flex: 1;
  left: 40px;
  font-size: 15px;
`;

type IoniconsProps = React.ComponentProps<typeof Ionicons>;
type TextInputProps = React.ComponentProps<typeof TextInput>;
type TextInputIconProps = Omit<IoniconsProps, "name"> &
  TextInputProps & {
    icon: IoniconsProps["name"];
    inputRef?: any;
  };

export default function TextInputIcon({
  icon,
  size,
  color,
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
        autoCorrect={false}
        autoCapitalize="none"
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
};
