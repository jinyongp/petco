import React from "react";
import { Text } from "react-native";
import { TitleProps } from "../@types";

export default function MainName({ title }: TitleProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: "nanum-bold",
        fontSize: 20,
      }}
    >
      {title}
    </Text>
  );
}
