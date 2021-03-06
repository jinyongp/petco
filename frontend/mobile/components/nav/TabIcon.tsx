import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TabIconProps } from "../@types";
import PropTypes from "prop-types";

export default function TabIcon({
  name,
  size,
  color,
  current,
}: TabIconProps): JSX.Element {
  return (
    <Ionicons
      name={name}
      color={current ? "#fec544" : color}
      size={size || current ? 30 : 28}
    />
  );
}

TabIcon.propTypes = {
  current: false,
};

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  current: PropTypes.bool,
};
