import React from "react";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import Container from "./Container";
import NextButton from "./NextButton";
import PropTypes from "prop-types";
import { ConfirmModalProps } from "./@types";

const StyledModal = styled(Modal)`
  background-color: #fff;
  border-radius: 30px;
  width: 325px;
  height: 400px;
  margin: auto auto;
  padding: 40px;
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
}: ConfirmModalProps): JSX.Element {
  return (
    <StyledModal
      animationIn="zoomIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0} // It solves a modal flickering occurred from android
      style={{ flex: 0 }}
      isVisible={isVisible}
    >
      <Container>
        <Container row margin={{ bottom: 40 }}>
          <LeftPetSvg width={100} height={100} />
          <RightPetSvg width={100} height={100} />
        </Container>
        <Container>
          <ModalHeader>{header}</ModalHeader>
        </Container>
        <ModalContent>{content}</ModalContent>
        <NextButton onPress={onClose} text={buttonText} disabled={false} />
      </Container>
    </StyledModal>
  );
}

ConfirmModal.defaultProps = {};

ConfirmModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  LeftPetSvg: PropTypes.func,
  RightPetSvg: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
