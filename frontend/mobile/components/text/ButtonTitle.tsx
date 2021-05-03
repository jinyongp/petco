import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { TitleProps } from "../@types";

export default function ButtonTitle({ title }: TitleProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: "nanum-bold",
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0.007,
      }}
    >
      {title}
    </Text>
  );
}

ButtonTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
