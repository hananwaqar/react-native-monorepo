import { defaultsDeep } from 'lodash';
import { StyleSheet } from 'react-native';
import { ProcessBarStyles } from './index';

const useMergeStyles = (style?: ProcessBarStyles): ProcessBarStyles => {

  const defaultStyles: ProcessBarStyles = StyleSheet.create({
    containerStyle: {height: 8, borderRadius: 5},
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
