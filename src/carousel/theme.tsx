import { CarouselStyles } from './index';
import { ThemeContext } from '../theme-context/context';
import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

const useMergeStyles = (style?: CarouselStyles): CarouselStyles => {
  const { colors } = useContext(ThemeContext);
  const pageCircleRadius = 12;

  const defaultStyles: CarouselStyles = StyleSheet.create({
    container: { backgroundColor: 'transparent', flex: 1},
    selectedCircle: { backgroundColor: colors.secondaryColor },
    pagingCircleContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
      width: pageCircleRadius * 4.5,
      justifyContent: 'space-between',
      marginBottom: 50
    },
    circle: {
      width: pageCircleRadius,
      height: pageCircleRadius,
      borderRadius: pageCircleRadius / 2,
      backgroundColor: colors.primaryColor,
    },
    listWrapper: {flex: 1}
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
