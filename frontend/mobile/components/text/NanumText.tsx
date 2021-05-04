import React from "react";
import { Text, TextStyle } from "react-native";
import PropTypes from "prop-types";
import Container from "../Container";
import { NanumTextProps } from "../@types";
import { colors } from "../../style/colors";

export default function NanumText({
  size,
  align,
  color,
  weight,
  margin,
  padding,
  children,
  position,
  lineHeight,
  letterSpacing,
}: NanumTextProps): JSX.Element {
  const textStyle: TextStyle = {
    color,
    lineHeight,
    letterSpacing,
    textAlign: align,
    fontFamily: `nanum-${weight}`,
  };

  if (typeof size === "string") {
    if (size === "xs") textStyle.fontSize = 12;
    else if (size === "s") textStyle.fontSize = 15;
    else if (size === "m") textStyle.fontSize = 18;
    else if (size === "l") textStyle.fontSize = 22;
    else if (size === "xl") textStyle.fontSize = 26;
  } else {
    textStyle.fontSize = size;
  }

  return (
    <Container
      style={{ width: "auto", height: "auto", alignSelf: position }}
      margin={margin}
      padding={padding}
    >
      <Text style={textStyle}>{children}</Text>
    </Container>
  );
}

NanumText.defaultProps = {
  size: "m",
  color: colors.dark,
  weight: "regular",
  position: "flex-start",
};

NanumText.propTypes = {
  title: PropTypes.string.isRequired,
  weight: PropTypes.oneOf(["light", "regular", "bold", "extra-bold"]),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  ]),
  children: PropTypes.string,
};
