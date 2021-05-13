import React from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import { ScreenLayoutProps } from "../@types";

export default function ScreenContainer({
  children,
  align,
}: Omit<ScreenLayoutProps, "scrollEnabled">): JSX.Element {
  return (
    <Container
      style={{
        flex: 1,
        width: "100%",
        justifyContent: align,
        backgroundColor: "white",
      }}
    >
      {children}
    </Container>
  );
}

ScreenContainer.defaultProps = {
  align: "center",
};

ScreenContainer.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
};
