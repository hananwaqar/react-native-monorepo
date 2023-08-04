import { defaultsDeep } from 'lodash';
import React, { ReactNode, useContext } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { ThemeContext } from '../theme-context';

export type ButtonProps = {
  label: string;
  isLoading?: boolean;
  variant: 'primary' | 'secondary';
  style?: ButtonStyles;
  disableOpacity?: number;
  disableColor?: string;
  bgColor?: string;
  loadingIndicator?: ReactNode;
  indicatorColor?: string;
} & TouchableOpacityProps;

export type ButtonStyles = {
  primaryContainerStyle?: StyleProp<ViewStyle>;
  secondaryContainerStyle?: StyleProp<ViewStyle>;
  primaryLabelStyle?: StyleProp<TextStyle>;
  secondaryLabelStyle?: StyleProp<TextStyle>;
  loadingWrapperStyle?: StyleProp<ViewStyle>;
};

const Button = (props: ButtonProps) => {
  const {
    label,
    isLoading,
    style,
    disabled,
    variant,
    disableOpacity,
    loadingIndicator,
    indicatorColor,
    disableColor,
    bgColor,
    ...restProps
  } = props;
  const { button, colors } = useContext(ThemeContext);

  const styles = defaultsDeep(style, button);

  const opacity =
    (disableColor !== undefined && isLoading) ||
    (disableColor === undefined && (isLoading || disabled))
      ? disableOpacity
      : 1.0;

  const _indicatorColor = indicatorColor ?? colors.loadingIndicatorColor;
  const _backgroundColor = disabled
    ? disableColor : (bgColor 
      ? bgColor : (variant === 'primary' ? colors.primaryButtonColor : colors.secondaryButtonColor))
  
  return (
    <TouchableOpacity
      style={[
        variant === 'primary' ? styles.primaryContainerStyle : styles.secondaryContainerStyle,
        {
          opacity,
          backgroundColor: _backgroundColor,
        },
      ]}
      activeOpacity={0.8}
      disabled={isLoading || disabled}
      {...restProps}
    >
      {isLoading && (
        <View style={styles.loadingWrapperStyle}>
          {loadingIndicator ?? <ActivityIndicator color={_indicatorColor} />}
        </View>
      )}
      <Text style={[variant === 'primary' ? styles.primaryLabelStyle : styles.secondaryLabelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  isLoading: false,
  variant: 'primary',
  disabled: false,
  disableOpacity: 0.6,
  indicatorColor: '#ffffff',
};

export default Button;
