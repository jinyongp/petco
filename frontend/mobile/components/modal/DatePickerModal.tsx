import React, { useState } from "react";
import Modal from "react-native-modal";
import DatePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";
import Container from "../Container";
import TouchableButton from "../button/TouchableButton";
import PropTypes from "prop-types";
import { DatePickerModalProps } from "../@types";

export default function DatePickerModal({
  isVisible,
  onChange,
  onClose,
  buttonTitle,
}: DatePickerModalProps): JSX.Element {
  const [date, setDate] = useState(new Date());
  return (
    <Modal
      animationIn="zoomIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0} // It solves a modal flickering occurred from android
      style={styles.modal}
      isVisible={isVisible}
    >
      <Container>
        <Container margin={{ bottom: 20 }}>
          <DatePicker
            value={date}
            mode="date"
            locale="ko_KR"
            display="spinner"
            onChange={(_, _date) => {
              _date && onChange(_date);
              _date && setDate(_date);
            }}
            textColor="black"
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "transparent",
            }}
            minimumDate={new Date(1990, 0, 1)}
            maximumDate={new Date()}
          />
        </Container>
        <Container margin={{ bottom: 20 }}>
          <TouchableButton onPress={onClose} title={buttonTitle} />
        </Container>
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 0,
    width: 316,
    height: 330,
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

DatePickerModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  LeftPetSvg: PropTypes.func,
  RightPetSvg: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
};
