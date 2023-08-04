import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TooltipProps = {
  description?: string;
  style?: TooltipStyles;
  isShowTooltip?: boolean;
  iconStyles?: {
    size?: number;
    color?: string;
    bgColor?: string;
  };
  popupAlignment?: 'center' | 'left' | 'right';
  arrowSize?: number;
  popUpWidth?: number;
};

export type TooltipStyles = {
  container?: StyleProp<ViewStyle>;
  popupContainer?: StyleProp<ViewStyle>;
  popupDescriptionText?: StyleProp<TextStyle>;
  triangleArrowView?: StyleProp<ViewStyle>;
};
