import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const RowText = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const Link = styled.TouchableOpacity``;

export default function AuthLink({ onPress, desc, link }) {
  return (
    <Container>
      <RowText style={{ paddingRight: 16 }}>{desc}</RowText>
      <Link onPress={onPress}>
        <RowText style={{ color: "#F5C01D" }}>{link}</RowText>
      </Link>
    </Container>
  );
}

AuthLink.propTypes = {
  onPress: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
