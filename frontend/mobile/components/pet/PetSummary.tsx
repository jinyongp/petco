import React from "react";
import Container from "../Container";
import MainName from "../text/MainName";
import PlainText from "../text/PlainText";
import { ImageProps } from "react-native";
import { Image } from "react-native";
import Dog from "../../assets/icons/dog.svg";

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
        <MainName title={name} />
        <PlainText title={`생년월일: ${birth}`} />
      </Container>
    </Container>
  );
}
