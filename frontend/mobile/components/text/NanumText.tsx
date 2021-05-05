import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
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

  if (type === "button") Object.assign(textStyle, nanumStyles.button);
  else if (type === "title") Object.assign(textStyle, nanumStyles.title);
  else if (type === "header") Object.assign(textStyle, nanumStyles.header);
  else if (type === "placeholder") Object.assign(textStyle, nanumStyles.placeholder);
  else if (type === "error") Object.assign(textStyle, nanumStyles.error);
  else if (type === "tiny") Object.assign(textStyle, nanumStyles.tiny);
  else if (type === "plain") {
    if (typeof size === "string") {
      if (size === "xs") textStyle.fontSize = 12;
      else if (size === "s") textStyle.fontSize = 15;
      else if (size === "m") textStyle.fontSize = 18;
      else if (size === "l") textStyle.fontSize = 22;
      else if (size === "xl") textStyle.fontSize = 26;
    } else {
      textStyle.fontSize = size;
    }
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

export const nanumStyles = StyleSheet.create({
  button: {
    fontSize: 15,
    fontFamily: "nanum-bold",
  },
  title: {
    fontSize: 18,
    fontFamily: "nanum-bold",
  },
  header: {
    fontSize: 26,
    fontFamily: "nanum-extra-bold",
    lineHeight: 40,
  },
  placeholder: {
    fontSize: 15,
    fontFamily: "nanum-regular",
    color: colors.placeholder,
  },
  error: {
    fontSize: 13,
    fontFamily: "nanum-light",
    color: colors.red,
  },
  tiny: {
    fontSize: 12,
    fontFamily: "nanum-light",
  },
});

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
