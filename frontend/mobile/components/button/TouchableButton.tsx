import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../style/colors";
import Container from "../Container";
import { TouchableButtonProps } from "../@types";
import PropTypes from "prop-types";
import NanumText from "../text/NanumText";

export default function TouchableButton({
  width,
  height,
  borderRadius,
  title,
  onPressIn,
  onPressOut,
  onPress,
  disabled,
  loading,
}: TouchableButtonProps): JSX.Element {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => {
        return {
          ...styles.container,
          width,
          height,
          borderRadius,
          opacity: disabled ? 0.5 : 1,
          backgroundColor: loading || pressed ? colors.yellow : "white",
        };
      }}
    >
      <Container style={{ ...styles.inner, borderRadius }}>
        <NanumText position="center" type="button">
          {title}
        </NanumText>
      </Container>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.yellow,
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 5,
  },
  inner: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});

TouchableButton.defaultProps = {
  width: "100%",
  height: 50,
  borderRadius: 999,
  disabled: false,
  loading: false,
};

TouchableButton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
