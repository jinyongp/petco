import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { TextInputIconProps } from "../@types";
import { colors } from "../../style/colors";

export default function TextInputIcon({
  Icon,
  size,
  color,
  value,
  onBlur,
  onFocus,
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
    <View style={styles.wrapper}>
      <Icon
        style={{ position: "absolute", left: 20 }}
        color={color}
        width={typeof size === "number" ? size : size?.width || 24}
        height={typeof size === "number" ? size : size?.height || 24}
      />
      <TextInput
        ref={inputRef}
        value={value}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="off"
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    paddingRight: 80,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    backgroundColor: "white",
    borderRadius: 999,
    zIndex: 999,
  },
  input: {
    left: 56,
    width: "100%",
    fontSize: 15,
    fontFamily: "nanum-regular",
  },
});

TextInputIcon.defaultProps = {
  size: 24,
  color: "black",
  blurOnSubmit: false,
  returnKeyType: "next",
};

TextInputIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  ]),
  value: PropTypes.string,
  color: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  inputRef: PropTypes.any,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};
