import { GestureResponderEvent } from "react-native";

export interface NextButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text: string;
  disabled?: boolean;
}

export interface ContainerProps {
  readonly padding?:
    | string
    | number
    | {
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
      };
  readonly margin?:
    | string
    | number
    | {
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
      };
  readonly row?: boolean;
  readonly children: React.ReactNode;
}
