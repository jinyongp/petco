declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.png" {
  import { ImageProps } from "react-native";
  const content: ImageProps["source"];
  export default content;
}
