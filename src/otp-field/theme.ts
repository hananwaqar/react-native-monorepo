import { ThemeContext } from '../theme-context/context';
import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { OTPFieldStyles } from '.';

const useMergeStyles = (style?: OTPFieldStyles): OTPFieldStyles => {
  const { colors } = useContext(ThemeContext);

  const defaultStyles: OTPFieldStyles = StyleSheet.create({
    containerStyle: {
      marginTop: 50,
      marginHorizontal: 50,
    },
    focusCellContainerStyle: {
      borderBottomColor: colors.primaryColor,
    },
    cellContainerStyle: {
      width: 20,
      height: 70,
      borderBottomWidth: 2,
      borderBottomColor: 'grey',
    },
    cellTextStyle: {
      lineHeight: 55,
      fontSize: 42,
      fontWeight: '600',
      textAlign: 'center',
      color: '#000000',
    },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
