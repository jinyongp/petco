import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Container from "../Container";
import { AuthLinkProps } from "../@types";

const RowText = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const Link = styled.TouchableOpacity``;

export default function AuthLink({
  onPress,
  desc,
  link,
}: AuthLinkProps): JSX.Element {
  return (
    <Container row>
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
