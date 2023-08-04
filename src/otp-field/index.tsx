import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import useMergeStyles from './theme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export type OTPFieldProps = {
  style?: OTPFieldStyles;
  cellCount: number;
  maskSymbol?: string;
  onChanged: (value: string) => void;
};

export type OTPFieldRef = {
  clearInput: () => void;
  focus: () => void;
};

export type OTPFieldStyles = {
  containerStyle?: StyleProp<ViewStyle>;
  focusCellContainerStyle?: StyleProp<ViewStyle>;
  cellContainerStyle?: StyleProp<ViewStyle>;
  cellTextStyle?: StyleProp<TextStyle>;
};

const OTPField = forwardRef(({ style, onChanged, maskSymbol, cellCount }: OTPFieldProps, ref) => {
  const styles: OTPFieldStyles = useMergeStyles(style);
  const [value, setValue] = useState('');
  const blurOnFullFillRef = useBlurOnFulfill({ value, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useImperativeHandle(
    ref,
    (): OTPFieldRef => ({
      clearInput: () => {
        setValue('');
      },
      focus: () => {
        blurOnFullFillRef.current?.focus();
      },
    })
  );

  useEffect(() => {
    onChanged(value);
  }, [value]);

  return (
    <CodeField
      ref={blurOnFullFillRef}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      // keyboardType='number-pad'
      textContentType="oneTimeCode"
      rootStyle={styles.containerStyle}
      renderCell={({ index, symbol, isFocused }) => {
        let textChild = null;
        if (symbol) {
          textChild = maskSymbol ?? '•';
        } else if (isFocused) {
          textChild = <Cursor />;
        }
        const fontSize = isFocused ? 30 : 44;
        const isFilled = index < value.length;
        return (
          <View
            key={index}
            style={[
              styles.cellContainerStyle,
              (isFocused || isFilled) && styles.focusCellContainerStyle,
            ]}
          >
            <Text
              style={[styles.cellTextStyle, { fontSize }]}
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {textChild}
            </Text>
          </View>
        );
      }}
    />
  );
});

export default OTPField;
