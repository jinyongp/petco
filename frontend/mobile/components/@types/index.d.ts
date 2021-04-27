import { SvgProps } from "react-native-svg";
import { GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "@types/react-native";
import { IconProps } from "@types/react-native-vector-icons/Icon";

type onPressType = (event: GestureResponderEvent) => void;

export interface CommonProps {
  readonly children?: React.ReactNode;
}

export interface NextButtonProps {
  readonly onPress?: onPressType;
  readonly text: string;
  readonly disabled?: boolean;
}

export interface ContainerProps extends CommonProps {
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

export interface ScreenLayoutProps extends CommonProps {
  readonly loading?: boolean;
}

export interface TextInputIconProps
  extends TextInputProps,
    Omit<IconProps, "name"> {
  readonly icon: React.ComponentProps<typeof Ionicons>["name"];
  readonly inputRef?: any;
}

export interface TextInputLabelProps extends TextInputProps {
  readonly label: string;
  readonly inputRef?: any;
}

export interface AuthLayoutProps extends CommonProps {
  readonly title: string;
}

export interface AuthLinkProps {
  readonly onPress: onPressType;
  readonly desc: string;
  readonly link: string;
}

export interface TabIconProps extends IconProps {
  readonly name: React.ComponentProps<typeof Ionicons>["name"];
  readonly current: boolean;
}
