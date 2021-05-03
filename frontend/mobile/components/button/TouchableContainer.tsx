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
  onPress,
  disabled,
  loading,
  children,
}: TouchableContainerProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => {
        return {
          borderRadius: 30,
          borderColor: colors.yellow,
          borderWidth: 2,
          overflow: "hidden",
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
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
