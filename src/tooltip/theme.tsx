import { TooltipStyles } from './types';
import { ThemeContext } from '../theme-context/context';
import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

const useMergeStyles = (style?: TooltipStyles): TooltipStyles => {
  const { fonts } = useContext(ThemeContext);

  const defaultStyles: TooltipStyles = StyleSheet.create({
    container: {
      marginVertical: 10,
      alignItems: 'center',
    },
    popupContainer: {
      backgroundColor: '#FFF0D9',
      paddingVertical: 10,
      paddingHorizontal: 12,
      position: 'absolute',
      borderRadius: 2,
    },
    triangleArrowView: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#FFF0D9',
      borderLeftColor: 'transparent',
      position: 'absolute',
    },
    popupDescriptionText: {
      fontFamily: fonts.regular,
      fontSize: 12,
      lineHeight: 21,
    },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
