import React from "react";
import DefaultContainer from "./DefaultContainer";

interface ContainerProps {
  readonly padding?: {
    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
  };
  readonly margin?: {
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
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
        ...padding,
        ...margin,
        flexDirection: row ? "row" : "column",
      }}
    >
      {children}
    </DefaultContainer>
  );
}

Container.defaultProps = {
  padding: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  margin: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  row: false,
};
