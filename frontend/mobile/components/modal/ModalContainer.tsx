import React from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import { ModalContainerProps } from "../@types";

export default function ModalContainer({
  isVisible,
  children,
  animationIn = "zoomIn",
  animationOut = "fadeOut",
  containerStyle,
}: ModalContainerProps): JSX.Element {
  return (
    <Modal
      animationIn={animationIn}
      animationOut={animationOut}
      backdropTransitionOutTiming={0} // It solves a modal flickering occurred from android
      style={[styles.modal, containerStyle]}
      isVisible={isVisible}
    >
      {children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 0,
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

ModalContainer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  containerStyle: PropTypes.object,
  children: PropTypes.node,
};
