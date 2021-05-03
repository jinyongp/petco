import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../Container";
import { TextLinkProps } from "../@types";
import { colors } from "../../style/colors";
import PropTypes from "prop-types";

export default function TextLink({
  onPress,
  desc,
  link,
}: TextLinkProps): JSX.Element {
  return (
    <Container row>
      <Text style={[styles.text, { paddingRight: 16 }]}>{desc}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, styles.link]}>{link}</Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "nanum-regular",
    fontSize: 12,
  },
  link: {
    color: colors.yellow,
  },
});

TextLink.propTypes = {
  onPress: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
