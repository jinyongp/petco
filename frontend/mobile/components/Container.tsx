import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import PropTypes from "prop-types";
import { ContainerProps } from "./@types";

export default function Container({
  padding,
  margin,
  row,
  children,
  style,
  space,
}: ContainerProps): JSX.Element {
  const containerStyle: StyleProp<ViewStyle> = {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: row ? "row" : "column",
    ...style,
  };
  if (space) {
    containerStyle.justifyContent = "space-between";
    if (row) containerStyle.width = space;
    else containerStyle.height = space;
  }

  if (typeof padding === "object") {
    containerStyle.paddingTop = padding.top;
    containerStyle.paddingRight = padding.right;
    containerStyle.paddingBottom = padding.bottom;
    containerStyle.paddingLeft = padding.left;
  } else if (["number", "string"].includes(typeof padding)) {
    containerStyle.padding = padding;
  }

  if (typeof margin === "object") {
    containerStyle.marginTop = margin.top;
    containerStyle.marginRight = margin.right;
    containerStyle.marginBottom = margin.bottom;
    containerStyle.marginLeft = margin.left;
  } else if (["number", "string"].includes(typeof margin)) {
    containerStyle.margin = margin;
  }

  return <View style={containerStyle}>{children}</View>;
}

Container.defaultProps = {
  padding: 0,
  margin: 0,
  row: false,
  space: 0,
};

Container.propTypes = {
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  row: PropTypes.bool,
  style: PropTypes.object,
  space: PropTypes.number,
};
