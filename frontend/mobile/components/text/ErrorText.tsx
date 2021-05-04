import React from "react";
import { Text } from "react-native";
import { colors } from "../../style/colors";
import { TitleProps } from "../@types";

export default function ErrorText({ title }: TitleProps): JSX.Element {
  return (
    <Text
      style={{
        fontFamily: "nanum-regular",
        fontSize: 13,
        color: colors.red,
      }}
    >
      {title}
    </Text>
  );
}
