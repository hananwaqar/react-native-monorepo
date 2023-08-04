import { SearchInputStyles } from './types';
import { ThemeContext } from '../theme-context/context';
import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

const useMergeStyles = (style?: SearchInputStyles): SearchInputStyles => {
  const { fonts, colors } = useContext(ThemeContext);

  const defaultStyles: SearchInputStyles = StyleSheet.create({
    containerStyle: {
      marginVertical: 10,
    },
    textInputStyle: {
      paddingVertical: 11,
      fontSize: 16,
      color: colors.primaryTextColor,
      fontFamily: fonts.regular,
      borderRadius: 5,
      paddingRight: 15,
      paddingLeft: 45,
      backgroundColor: colors.backgroundSearchInput,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    searchIconWrapper: {
      position: 'absolute',
      left: 10,
      height: '100%',
      alignItems: 'center',
      flexDirection: 'row',
    },
    activeInputBorderColor: { borderColor: colors.primaryColor },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
