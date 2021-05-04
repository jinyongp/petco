import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { TitleProps } from "../@types";

interface ButtonTitleProps extends TitleProps {
  readonly type?: "light" | "regular" | "bold" | "extra-bold";
}

export default function ButtonTitle({
  title,
  type,
}: ButtonTitleProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: `nanum-${type}`,
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0.007,
      }}
    >
      {title}
    </Text>
  );
}

ButtonTitle.defaultProps = {
  type: "bold",
};

ButtonTitle.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["light", "regular", "bold", "extra-bold"]),
};
