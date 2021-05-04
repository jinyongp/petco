import React from "react";
import { Text, TextStyle } from "react-native";
import PropTypes from "prop-types";
import Container from "../Container";
import { NanumTextProps } from "../@types";
import { colors } from "../../style/colors";

export default function NanumText({
  type,
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

  if (type === "plain") {
    if (typeof size === "string") {
      if (size === "xs") textStyle.fontSize = 12;
      else if (size === "s") textStyle.fontSize = 15;
      else if (size === "m") textStyle.fontSize = 18;
      else if (size === "l") textStyle.fontSize = 22;
      else if (size === "xl") textStyle.fontSize = 26;
    } else {
      textStyle.fontSize = size;
    }
  } else if (type === "button") {
    textStyle.fontSize = 15;
    textStyle.fontFamily = "nanum-bold";
  } else if (type === "title") {
    textStyle.fontSize = 18;
    textStyle.fontFamily = "nanum-bold";
  } else if (type === "header") {
    textStyle.fontSize = 26;
    textStyle.fontFamily = "nanum-extra-bold";
    textStyle.lineHeight = 40;
  } else if (type === "placeholder") {
    textStyle.fontSize = 15;
    textStyle.color = colors.placeholder;
  } else if (type === "error") {
    (textStyle.fontSize = 13), (textStyle.color = colors.red);
  } else if (type === "tiny") {
    textStyle.fontSize = 12;
    textStyle.fontFamily = "nanum-light";
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
  type: "plain",
  size: "s",
  color: colors.dark,
  weight: "regular",
  position: "flex-start",
};

NanumText.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
