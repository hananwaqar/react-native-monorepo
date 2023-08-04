import { useField } from 'formik';
import { defaultsDeep } from 'lodash';
import React, { ReactNode, useContext, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import { ThemeContext, useThemeFonts } from 'react-native-theme-component/src/theme-context';

export type InputFieldProps = TextInputMaskProps &
  TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    errorBorderColor?: string;
    activeBorderColor?: string;
    inactiveBorderColor?: string;
    placeholderTextColor?: string;
    prefixText?: string;
    style?: InputFieldStyles;
    onClickSuffixIcon?: () => void;
    formatError?: (error: string) => string;
  };

export type InputFieldStyles = {
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
};

const InputField = (props: InputFieldProps) => {
  const {
    name,
    onFocus,
    onBlur,
    suffixIcon,
    prefixIcon,
    errorBorderColor,
    activeBorderColor,
    inactiveBorderColor,
    style,
    placeholderTextColor,
    formatError,
    onClickSuffixIcon,
    options,
    placeholder,
    prefixText,
    ...restProps
  } = props;
  const { inputField, colors } = useContext(ThemeContext);
  const [active, setActive] = useState(false);
  const [field, meta, helpers] = useField(name);
  const styles: InputFieldStyles = defaultsDeep(style, inputField);
  const showMask = !!options?.mask;

  const handleOnFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setActive(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleOnBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setActive(false);
    field.onBlur(name);
    helpers.setTouched(true);
    if (onBlur) {
      onBlur(event);
    }
  };

  let separatorColor: string;

  if (meta.error && meta.touched) {
    separatorColor = (errorBorderColor ?? colors.errorInputBorderColor)!;
  } else {
    separatorColor = active
      ? (activeBorderColor ?? colors.activeInputBorderColor)!
      : (inactiveBorderColor ?? colors.inActiveInputBorderColor)!;
  }

  const getErrorMessage = (error: string) => {
    return formatError?.(error) ?? error;
  };

  const titleInputStyles: TextStyle = {
    color: '#858585',
    fontSize: 12,
    fontFamily: useThemeFonts().regular,
    marginLeft: 5,
  };

  const inputContainerStyles: ViewStyle = {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  };

  const inputPrefixTextStyles: TextStyle = {
    color: '#333333',
    fontSize: 16,
    fontFamily: useThemeFonts().medium,
  };

  return (
    <View style={[styles.containerStyle, { marginTop: 24 }]}>
      {field.value && field.value.length > 0 ? (
        <Text style={titleInputStyles}>{placeholder}</Text>
      ) : (
        <View />
      )}
      <View style={inputContainerStyles}>
        {prefixText && prefixText.length > 0 && (
          <Text style={inputPrefixTextStyles}>{prefixText}</Text>
        )}
        <View
          style={[
            styles.contentContainerStyle,
            {
              flex: 1,
              borderColor: separatorColor,
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              paddingHorizontal: 0,
              paddingRight: 12,
              borderBottomColor: '#C2C2C2',
            },
          ]}
        >
          {prefixIcon}
          <View style={styles.inputContainerStyle}>
            {showMask ? (
              <TextInputMask
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={field.value}
                onChangeText={field.onChange(name)}
                style={styles.textInputStyle}
                placeholderTextColor={placeholderTextColor}
                options={options}
                placeholder={placeholder}
                {...restProps}
              />
            ) : (
              <TextInput
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={field.value}
                onChangeText={field.onChange(name)}
                style={styles.textInputStyle}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                {...restProps}
              />
            )}
          </View>
          {onClickSuffixIcon ? (
            <TouchableOpacity onPress={onClickSuffixIcon}>{suffixIcon}</TouchableOpacity>
          ) : (
            suffixIcon
          )}
        </View>
      </View>
      {meta.error && meta.touched && (
        <Text style={styles.errorTextStyle}>{getErrorMessage(meta.error)}</Text>
      )}
    </View>
  );
};

InputField.defaultProps = {
  type: 'custom',
};

export default InputField;
