import { ThemeContext } from './../theme-context/context';
import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CountdownTimerStyles } from '.';

const useMergeStyles = (style?: CountdownTimerStyles): CountdownTimerStyles => {
  const { colors, fonts } = useContext(ThemeContext);

  const defaultStyles: CountdownTimerStyles = StyleSheet.create({
    runningTextStyle: {
      fontSize: 15,
      color: colors.primaryTextColor,
      fontFamily: fonts.medium,
    },
    endTextStyle: {
      fontSize: 15,
      color: colors.primaryColor,
      fontFamily: fonts.medium,
    },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
