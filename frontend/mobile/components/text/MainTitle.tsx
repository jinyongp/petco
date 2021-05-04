import React from "react";
import { Text } from "react-native";
import { TitleProps } from "../@types";

export default function MainTitle({ title }: TitleProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: "nanum-extra-bold",
        fontSize: 26,
        lineHeight: 40,
      }}
    >
      {title}
    </Text>
  );
}
