import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../style/colors";
import Container from "../Container";
import { TouchableContainerProps } from "../@types";
import PropTypes from "prop-types";

export default function TouchableContainer({
  row,
  width,
  height,
  onPressIn,
  onPressOut,
  onPress,
  disabled,
  loading,
  children,
}: TouchableContainerProps): JSX.Element {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => {
        return {
          ...styles.shadow,
          ...styles.border,
          width,
          height,
          opacity: disabled ? 0.5 : 1,
          backgroundColor: loading || pressed ? colors.yellow : "white",
        };
      }}
    >
      <Container row={row} style={styles.inner}>
        {children}
      </Container>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 5,
  },
  border: {
    borderRadius: 30,
    borderColor: colors.yellow,
    borderWidth: 1,
  },
  inner: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});

TouchableContainer.defaultProps = {
  row: false,
  width: "100%",
  height: 50,
  disabled: false,
  loading: false,
};

TouchableContainer.propTypes = {
  row: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
