import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import useMergeStyles from './theme';

export type ProcessBarProps = {
  style?: ProcessBarStyles;
  processPercent?: number;
  bgColor?: string;
  processColor?: string;
};

export type ProcessBarStyles = {
  containerStyle?: StyleProp<ViewStyle>;
};

const ProcessBar = ({ processPercent, style, bgColor, processColor }: ProcessBarProps) => {
  const styles: ProcessBarStyles = useMergeStyles(style);
  const percent = `${processPercent}%`
  const backgroundColor = bgColor || '#D5F3FB';
  const processBarColor = processColor || '#1EBCE8';

  return (
    <View style={[styles.containerStyle, {backgroundColor}]}>
      <View style={[styles.containerStyle, {backgroundColor: processBarColor, width: percent }]} />
    </View>
  );
};

export default ProcessBar;
