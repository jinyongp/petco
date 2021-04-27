import React from "react";
import { Ionicons } from "@expo/vector-icons";

type TabIconProps = React.ComponentProps<typeof Ionicons> & {
  current: boolean;
};

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
      size={size || current ? 24 : 22}
    />
  );
}
