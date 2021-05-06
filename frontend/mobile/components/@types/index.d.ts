import { SvgProps } from "react-native-svg";
import {
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  PressableProps,
  TextInput,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "@types/react-native";
import { IconProps } from "@types/react-native-vector-icons/Icon";
import { IOSNativeProps, AndroidNativeProps } from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
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

type BoxStyleProps = {
  readonly padding?: string | number | FourWayType;
  readonly margin?: string | number | FourWayType;
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
  readonly borderRadius?: ViewStyle["borderRadius"];
  readonly title: string;
  readonly loading?: boolean;
}

export interface TouchableContainerProps extends Omit<TouchableButtonProps, "title">, CommonProps {
  readonly row?: boolean;
}

export interface ContainerProps extends CommonProps, BoxStyleProps {
  readonly row?: boolean;
  readonly style?: ViewStyle;
  readonly space?: number;
}

export interface ConfirmModalProps {
  readonly isVisible: boolean;
  readonly onClose: onPressType;
  readonly header?: string;
  readonly content?: string;
  readonly buttonTitle: string;
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

export interface ModalContainerProps extends CommonProps {
  readonly isVisible: boolean;
  readonly animationIn?: React.ComponentProps<typeof Modal>["animationIn"];
  readonly animationOut?: React.ComponentProps<typeof Modal>["animationOut"];
  readonly containerStyle?: ViewStyle;
}

type CommonTextInputProps = Pick<
  TextInputProps,
  | "value"
  | "onBlur"
  | "onFocus"
  | "placeholder"
  | "returnKeyType"
  | "blurOnSubmit"
  | "keyboardType"
  | "onChangeText"
  | "onSubmitEditing"
  | "secureTextEntry"
>;

export interface TextInputIconProps extends Pick<SvgProps, "color">, CommonTextInputProps {
  readonly Icon: React.FC<SvgProps>;
  readonly size?: number | SizeType;
  readonly inputRef?: React.Ref<TextInput>;
}

export interface TextInputLabelProps extends CommonTextInputProps {
  readonly label: string;
  readonly error?: string;
  readonly inputRef?: any;
}

export interface TextLinkProps {
  readonly onPress: onPressType;
  readonly desc: string;
  readonly link: string;
}

type CommonIconProps = Pick<React.ComponentProps<typeof Ionicons>, "name" | "size" | "color">;

export interface TabIconProps extends CommonIconProps {
  readonly current?: boolean;
}

export interface PickerLabelProps extends React.ComponentProps<typeof ModalSelector> {
  readonly label: string;
}

export interface DatePickerLabelProps {
  readonly label: string;
  readonly onChange: (date: string) => void;
}

export interface NanumTextProps extends BoxStyleProps, CommonProps {
  readonly type?: "plain" | "button" | "title" | "header" | "placeholder" | "error" | "tiny";
  readonly size?: number | "xs" | "s" | "m" | "l" | "xl";
  readonly align?: TextStyle["textAlign"];
  readonly color?: TextStyle["color"];
  readonly weight?: "light" | "regular" | "bold" | "extra-bold" | TextStyle["fontWeight"];
  readonly onPress?: onPressType;
  readonly position?: ViewStyle["alignSelf"];
  readonly lineHeight?: TextStyle["lineHeight"];
  readonly letterSpacing?: TextStyle["letterSpacing"];
  readonly textDecorationLine?: TextStyle["textDecorationLine"];
}
