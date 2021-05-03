import React from "react";
import { Text } from "react-native";
import { TitleProps } from "../@types";

export default function PlainSmall({ title }: TitleProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: "nanum-regular",
        fontSize: 12,
      }}
    >
      {title}
    </Text>
  );
}
