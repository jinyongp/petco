import React from "react";
import { Text, TextStyle } from "react-native";
import { TitleProps } from "../@types";

interface PlainTextProps extends TitleProps {
  readonly align?: TextStyle["textAlign"];
}

export default function PlainText({
  title,
  align,
}: PlainTextProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: "nanum-regular",
        fontSize: 15,
        lineHeight: 20,
        textAlign: align,
      }}
    >
      {title}
    </Text>
  );
}

PlainText.defaultProps = {
  align: "auto",
};
