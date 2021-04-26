import React from "react";
import DefaultContainer from "./DefaultContainer";

interface ContainerProps {
  readonly padding?: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
  readonly margin?: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
  readonly row?: boolean;
  readonly children: any;
}

export default function Container({
  padding,
  margin,
  row,
  children,
}: ContainerProps) {
  return (
    <DefaultContainer
      style={{
        flex: 1,
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left,
        marginTop: margin.top,
        marginRight: margin.right,
        marginBottom: margin.bottom,
        marginLeft: margin.left,
        flexDirection: row ? "row" : "column",
      }}
    >
      {children}
    </DefaultContainer>
  );
}

Container.defaultProps = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  row: false,
};
