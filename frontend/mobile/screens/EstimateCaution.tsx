import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container, NanumText, TouchableButton } from "../components";
import { nanumStyles } from "../components/text/NanumText";
import { colors } from "../style/colors";

interface EstimateCautionProps {
  readonly onConfirm?: () => void;
  readonly onBack?: () => void;
}

export default function EstimateCaution({ onConfirm, onBack }: EstimateCautionProps): JSX.Element {
  return (
    <Container style={{ width: 350 }}>
      <Container
        style={{
          width: "100%",
          backgroundColor: colors.yellow,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        padding={10}
      >
        <NanumText type="header" position="center">
          주의 사항
        </NanumText>
      </Container>

      <Container padding={23}>
        <NanumText margin={{ bottom: 20 }}>
          검사 예상 비용 확인을 위해{" "}
          <Text style={{ ...nanumStyles.button }}>
            ‘증상이 있는 부위’와 ‘증상’을 정확하게 작성해 주세요.{" "}
          </Text>
          이전에 병원에 방문하셔서 받은 진료나 검사 결과가 있다면 좀 더 정확한 예상 비용 안내가
          가능합니다.
          <Text style={{ ...nanumStyles.plain, fontSize: 13 }}>
            {"\n"}* 증상에 따라 진료가 먼저 필요한 경우 기초 진료비용으로 안내될 수 있습니다.
          </Text>
        </NanumText>

        <Container style={{ height: 1, backgroundColor: colors.light }} />

        <NanumText type="title" margin={{ top: 20, bottom: 15 }}>
          견적이 필요하신가요?
        </NanumText>
        <Container margin={{ bottom: 30 }}>
          <NanumText weight="bold" size="s" margin={{ bottom: 5 }}>
            견적을 받기 위해선 사전 상담이 필수입니다.
          </NanumText>
          <NanumText type="tiny">
            정확한 답변을 드리기 위해 모든 보호자님과 사전상담이 이루어지고 있습니다. 상담종료후
            보호자님의 문의가 병원에 전달됩니다. 입력해주신 번호로 연락 드립니다.
          </NanumText>
        </Container>
        <Container>
          <TouchableButton title="동의 후 신청 완료" onPress={onConfirm} />
          <TouchableOpacity onPress={onBack}>
            <NanumText
              weight="bold"
              size="s"
              margin={{ top: 20, bottom: 10 }}
              color={colors.placeholder}
            >
              뒤로
            </NanumText>
          </TouchableOpacity>
        </Container>
      </Container>
    </Container>
  );
}
