import React from "react";
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { ConfirmModalProps } from "../@types";
import Container from "../Container";
import TouchableButton from "../button/TouchableButton";
import NanumText from "../text/NanumText";

export default function ConfirmModal({
  isVisible,
  LeftPetSvg,
  RightPetSvg,
  onClose,
  header,
  content,
  containerSize,
  buttonSize,
  buttonTitle,
}: ConfirmModalProps): JSX.Element {
  const iconSize = 90;
  return (
    <Modal
      animationIn="zoomIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0} // It solves a modal flickering occurred from android
      style={[styles.modal, containerSize]}
      isVisible={isVisible}
    >
      <Container>
        {(LeftPetSvg || RightPetSvg) && (
          <Container row margin={{ bottom: 30 }}>
            {LeftPetSvg && <LeftPetSvg width={iconSize} height={iconSize} />}
            {RightPetSvg && <RightPetSvg width={iconSize} height={iconSize} />}
          </Container>
        )}
        {header && (
          <NanumText type="title" position="center" align="center" margin={{ bottom: 30 }}>
            {header}
          </NanumText>
        )}
        {content && (
          <NanumText position="center" align="center" margin={{ bottom: 40 }}>
            {content}
          </NanumText>
        )}
        <TouchableButton
          onPress={onClose}
          title={buttonTitle}
          width={buttonSize?.width}
          height={buttonSize?.height}
        />
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    width: 316,
    height: 400,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    padding: 30,
  },
  content: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 40,
  },
});

ConfirmModal.defaultProps = {
  containerSize: {
    width: 316,
    height: 400,
  },
  buttonSize: {
    width: "100%",
    height: 50,
  },
};

ConfirmModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  LeftPetSvg: PropTypes.func,
  RightPetSvg: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
};
