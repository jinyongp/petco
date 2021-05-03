import React from "react";
import Modal from "react-native-modal";
import { StyleSheet, Text } from "react-native";
import Container from "./Container";
import PropTypes from "prop-types";
import { ConfirmModalProps } from "./@types";
import { TouchableButton } from "./button";

export default function ConfirmModal({
  isVisible,
  LeftPetSvg,
  RightPetSvg,
  onClose,
  header,
  content,
}: ConfirmModalProps): JSX.Element {
  return (
    <Modal
      animationIn="zoomIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0} // It solves a modal flickering occurred from android
      style={styles.modal}
      isVisible={isVisible}
    >
      <Container>
        <Container row margin={{ bottom: 40 }}>
          {LeftPetSvg && <LeftPetSvg width={100} height={100} />}
          {RightPetSvg && <RightPetSvg width={100} height={100} />}
        </Container>
        <Container>
          <Text style={styles.header}>{header}</Text>
        </Container>
        <Text style={styles.content}>{content}</Text>
        <TouchableButton
          onPress={onClose}
          disabled={false}
          width="100%"
          height={50}
          title="완료"
        />
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    backgroundColor: "white",
    borderRadius: 30,
    width: 325,
    height: 400,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    padding: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  content: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 40,
  },
});

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
