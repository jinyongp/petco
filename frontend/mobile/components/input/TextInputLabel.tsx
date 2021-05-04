import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import { TextInputLabelProps } from "../@types";
import PlainText from "../text/PlainText";
import ErrorText from "../text/ErrorText";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../style/colors";

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
      <Container
        row
        style={{ justifyContent: "space-between" }}
        margin={{ left: 20, bottom: 15 }}
      >
        <PlainText title={label} />
        <ErrorText title={error} />
      </Container>
      <View
        style={[
          styles.wrapper,
          { borderColor: error ? "#ff000066" : "#c4c4c4" },
        ]}
      >
        <TextInput
          ref={inputRef}
          value={value}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          clearTextOnFocus={Boolean(error)}
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          onBlur={onBlur}
        />
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
