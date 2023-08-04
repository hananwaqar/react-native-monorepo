import { ThemeFontProps } from 'react-native-theme-component/src/fonts';
import { Platform, StyleSheet } from 'react-native';
import { InputFieldStyles } from 'react-native-theme-component/src/adb-input-field';
import { ThemeColorProps } from 'react-native-theme-component/src/colors';

const defaultInputFieldTheme = (fonts: ThemeFontProps, _: ThemeColorProps): InputFieldStyles => {
  return StyleSheet.create({
    contentContainerStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 2,
    },
    inputContainerStyle: {
      flex: 1,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInputStyle: {
      flex: 1,
      marginHorizontal: 10,
      fontSize: 16,
      color: 'red',
      fontFamily: fonts.regular,
      paddingBottom: 0,
      paddingTop: 0,
    },
    errorTextStyle: {
      fontSize: 12,
      color: 'red',
      marginTop: Platform.OS === 'ios' ? 5 : 10,
      fontFamily: fonts.regular,
    },
  });
};
export default defaultInputFieldTheme;
