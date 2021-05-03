import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

interface ButtonTitleProps {
  readonly title: string;
}

export default function ButtonTitle({ title }: ButtonTitleProps): JSX.Element {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "nanum-bold",
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0.007,
  },
});

ButtonTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
