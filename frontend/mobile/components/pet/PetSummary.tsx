import React from "react";
import { Image, ImageProps } from "react-native";
import Container from "../Container";
import Dog from "../../assets/icons/dog.svg";
import Cat from "../../assets/icons/cat.svg";
import NanumText from "../text/NanumText";

interface PetSummaryProps {
  readonly info: {
    readonly name: string;
    readonly birth: string;
    readonly avatar: ImageProps["source"];
    readonly type: "cat" | "dog";
  };
}

export default function PetSummary({
  info: { name, birth, avatar, type },
}: PetSummaryProps): JSX.Element {
  return (
    <Container row>
      <Container style={{ width: "auto" }} margin={{ right: 23 }}>
        {avatar ? (
          <Image
            source={avatar}
            width={100}
            height={100}
            style={{ borderRadius: 100 }}
          />
        ) : (
          (() => {
            if (type === "dog") {
              return <Dog width={100} height={100} />;
            } else {
              return <Cat width={100} height={100} />;
            }
          })()
        )}
      </Container>
      <Container style={{ width: "auto", alignItems: "flex-start" }} space={50}>
        <NanumText type="title">{name}</NanumText>
        <NanumText>생년월일: {birth}</NanumText>
      </Container>
    </Container>
  );
}
