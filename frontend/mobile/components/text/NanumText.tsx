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
  onPress,
  children,
  position,
  lineHeight,
  letterSpacing,
  textDecorationLine,
}: NanumTextProps): JSX.Element {
  const textStyle: TextStyle = {
    color,
    lineHeight,
    letterSpacing,
    textDecorationLine,
    textAlign: align,
    fontFamily: `nanum-${weight}`,
  };

  if (type === "plain") Object.assign(textStyle, nanumStyles.plain);
  else if (type === "button") Object.assign(textStyle, nanumStyles.button);
  else if (type === "title") Object.assign(textStyle, nanumStyles.title);
  else if (type === "header") Object.assign(textStyle, nanumStyles.header);
  else if (type === "placeholder") Object.assign(textStyle, nanumStyles.placeholder);
  else if (type === "error") Object.assign(textStyle, nanumStyles.error);
  else if (type === "tiny") Object.assign(textStyle, nanumStyles.tiny);
  else {
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
      style={{
        width: "auto",
        height: "auto",
        alignSelf: position,
      }}
      margin={margin}
      padding={padding}
    >
      <Text style={textStyle} onPress={onPress}>
        {children}
      </Text>
    </Container>
  );
}

export const nanumStyles = StyleSheet.create({
  plain: {
    fontSize: 15,
    fontFamily: "nanum-regular",
    lineHeight: 20,
  },
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
    lineHeight: 15,
  },
});

NanumText.defaultProps = {
  type: "",
  size: "s",
  color: colors.dark,
  weight: "regular",
  position: "flex-start",
};

NanumText.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPress: PropTypes.func,
};
