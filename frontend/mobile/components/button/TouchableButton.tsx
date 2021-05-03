import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../../style/colors";
import { Container } from "..";
import { TouchableButtonProps } from "../@types";
import { ButtonTitle } from "../text";

type PressableStyleProps = ({ pressed: boolean }) => ViewStyle;

export default function TouchableButton({
  width,
  height,
  title,
  onPress,
  disabled,
}: TouchableButtonProps): JSX.Element {
  const containerStyle: PressableStyleProps = ({ pressed }) => {
    return {
      borderRadius: 999,
      borderColor: colors.yellow,
      borderWidth: 2,
      overflow: "hidden",
      width,
      height,
      backgroundColor: pressed ? colors.yellow : "white",
    };
  };

  return (
    <Pressable onPress={onPress} disabled={disabled} style={containerStyle}>
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
  },
});
