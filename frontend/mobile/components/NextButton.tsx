import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { NextButtonProps } from "./@types";

const Button = styled.TouchableOpacity`
  background-color: #fec544;
  width: 100%;
  padding: 20px 20px;
  border-radius: 30px;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const InnerText = styled.Text`
  font-size: 15px;
  font-weight: 800;
  text-align: center;
`;

export default function NextButton({
  onPress,
  text,
  disabled,
}: NextButtonProps): JSX.Element {
  return (
    <Button onPress={onPress} disabled={disabled} accessible={!disabled}>
      <InnerText>{text}</InnerText>
    </Button>
  );
}

NextButton.defaultProps = {
  onPress: () => {},
  disabled: false,
};

NextButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
