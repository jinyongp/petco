import { SvgProps } from "react-native-svg";
import {
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  PressableProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "@types/react-native";
import { IconProps } from "@types/react-native-vector-icons/Icon";
import {
  IOSNativeProps,
  AndroidNativeProps,
} from "@react-native-community/datetimepicker";
import ModalSelector from "react-native-modal-selector";

type onPressType = PressableProps["onPress"];

type SizeType = {
  readonly width?: number | string;
  readonly height?: number | string;
};

type FourWayType = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};

export interface CommonProps {
  readonly children?: React.ReactNode;
}

export interface ScreenLayoutProps extends CommonProps {
  readonly align?: "flex-start" | "center" | "flex-end";
}

export interface TouchableButtonProps {
  readonly onPressIn?: onPressType;
  readonly onPressOut?: onPressType;
  readonly onPress?: onPressType;
  readonly disabled?: boolean;
  readonly width?: ViewStyle["width"];
  readonly height?: ViewStyle["height"];
  readonly title: string;
  readonly loading?: boolean;
}

export interface TouchableContainerProps
  extends Omit<TouchableButtonProps, "title">,
    CommonProps {
  readonly row?: boolean;
}

export interface ContainerProps extends CommonProps {
  readonly padding?: string | number | FourWayType;
  readonly margin?: string | number | FourWayType;
  readonly row?: boolean;
  readonly style?: ViewStyle;
  readonly space?: number;
}

export interface ConfirmModalProps {
  readonly isVisible: boolean;
  readonly onClose: onPressType;
  readonly header?: string;
  readonly content?: string;
  readonly buttonTitle?: string;
  readonly LeftPetSvg?: React.FC<SvgProps>;
  readonly RightPetSvg?: React.FC<SvgProps>;
  readonly containerSize?: SizeType;
  readonly buttonSize?: SizeType;
}

export interface DatePickerModalProps {
  readonly isVisible: boolean;
  readonly onChange: (date: Date) => void;
  readonly onClose: onPressType;
  readonly buttonTitle: string;
}

export interface TextInputIconProps extends TextInputProps {
  readonly Icon: React.FC<SvgProps>;
  readonly color: SvgProps["color"];
  readonly inputRef?: any;
  readonly size?: number | SizeType;
}

export interface TextInputLabelProps extends TextInputProps {
  readonly label: string;
  readonly error?: string;
  readonly inputRef?: any;
}

export interface TextLinkProps {
  readonly onPress: onPressType;
  readonly desc: string;
  readonly link: string;
}

export interface TabIconProps extends IconProps {
  readonly name: React.ComponentProps<typeof Ionicons>["name"];
  readonly current: boolean;
}

export interface PickerLabelProps
  extends React.ComponentProps<typeof ModalSelector> {
  readonly label: string;
}

export interface DatePickerLabelProps
  extends Omit<IOSNativeProps, "value">,
    Omit<AndroidNativeProps, "value"> {
  readonly label: string;
  readonly onChange: (date: string) => void;
}

export interface TitleProps {
  readonly title: string;
}
