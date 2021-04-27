import { SvgProps } from "react-native-svg";
import { GestureResponderEvent } from "react-native";

type onPressType = (event: GestureResponderEvent) => void;

export interface NextButtonProps {
  readonly onPress?: onPressType;
  readonly text: string;
  readonly disabled?: boolean;
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

export interface ConfirmModalProps {
  readonly isVisible: boolean;
  readonly onClose: onPressType;
  readonly header: string;
  readonly content: string;
  readonly buttonText: string;
  readonly LeftPetSvg?: React.FC<SvgProps>;
  readonly RightPetSvg?: React.FC<SvgProps>;
}
