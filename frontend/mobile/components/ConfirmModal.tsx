import React from "react";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import { AuthButton } from "./auth";

const Container = styled.View``;

const StyledModal = styled(Modal)`
  background-color: #fff;
  border-radius: 30px;
  width: 325px;
  height: 400px;
  margin: auto auto;
`;

const ModalWrapper = styled(Container)`
  width: 100%;
  padding: 40px;
`;

const AnimalWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

const ModalHeaderWrapper = styled.View`
  align-items: center;
`;

const ModalHeader = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ModalContent = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-bottom: 40px;
`;

export default function ConfirmModal({
  isVisible,
  LeftPetSvg,
  RightPetSvg,
  onClose,
  header,
  content,
  buttonText,
}) {
  return (
    <Container>
      <StyledModal
        animationIn="zoomIn"
        animationOut="fadeOut"
        backdropTransitionOutTiming={0} // It solves a modal flickering occurred from android
        style={{ flex: 0 }}
        isVisible={isVisible}
      >
        <ModalWrapper>
          <AnimalWrapper>
            <LeftPetSvg width={100} height={100} />
            <RightPetSvg width={100} height={100} />
          </AnimalWrapper>
          <ModalHeaderWrapper>
            <ModalHeader>{header}</ModalHeader>
          </ModalHeaderWrapper>
          <ModalContent>{content}</ModalContent>
          <AuthButton onPress={onClose} text={buttonText} disabled={false} />
        </ModalWrapper>
      </StyledModal>
    </Container>
  );
}
