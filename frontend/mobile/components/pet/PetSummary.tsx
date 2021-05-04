import React from "react";
import { Image, ImageProps } from "react-native";
import Container from "../Container";
import Dog from "../../assets/icons/dog.svg";
import NanumText from "../text/NanumText";

interface PetSummaryProps {
  readonly info: {
    readonly name: string;
    readonly birth: string;
    readonly profile: ImageProps["source"];
  };
}

export default function PetSummary({
  info: { name, birth, profile },
}: PetSummaryProps): JSX.Element {
  return (
    <Container row>
      <Container style={{ width: "auto" }} margin={{ right: 23 }}>
        {profile ? (
          <Image
            source={profile}
            width={100}
            height={100}
            style={{ borderRadius: 100 }}
          />
        ) : (
          <Dog width={100} height={100} />
        )}
      </Container>
      <Container style={{ width: "auto", alignItems: "flex-start" }} space={50}>
        <NanumText type="title">{name}</NanumText>
        <NanumText>생년월일: {birth}</NanumText>
      </Container>
    </Container>
  );
}
