import React from "react";
import Estimate from "../assets/icons/estimate.svg";
import Stethoscope from "../assets/icons/stethoscope.svg";
import {
  Container,
  NanumText,
  ScreenLayout,
  TouchableContainer,
} from "../components";

export default function MyProfile() {
  return (
    <ScreenLayout align="flex-start">
      <NanumText type="header" margin={{ top: 50, bottom: 57 }}>
        {`서강준님의${"\n"}신청 내역`}
      </NanumText>
      <Container margin={{ bottom: 40 }}>
        <TouchableContainer row height={75}>
          <Estimate width={33} height={45} />
          <NanumText position="center" type="button" margin={{ left: 25 }}>
            견적 신청 내역
          </NanumText>
        </TouchableContainer>
      </Container>
      <Container>
        <TouchableContainer row height={75}>
          <Stethoscope width={33} height={40} />
          <NanumText position="center" type="button" margin={{ left: 25 }}>
            예약 신청 내역
          </NanumText>
        </TouchableContainer>
      </Container>
    </ScreenLayout>
  );
}
