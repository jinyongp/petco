import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../style/colors";
import Container from "../Container";
import { TouchableButtonProps } from "../@types";
import PropTypes from "prop-types";
import ButtonTitle from "../text/ButtonTitle";

export default function TouchableButton({
  width,
  height,
  title,
  onPress,
  disabled,
  loading,
}: TouchableButtonProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => {
        return {
          borderRadius: 999,
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
      <Container style={styles.inner}>
        <ButtonTitle title={title} />
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

TouchableButton.defaultProps = {
  width: "100%",
  height: 50,
  disabled: false,
  loading: false,
};

TouchableButton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
