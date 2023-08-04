import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../theme-context/context';
import { RadioButtonGroupStyles } from './index';

const useMergeStyles = (style?: RadioButtonGroupStyles): RadioButtonGroupStyles => {
  const { fonts } = useContext(ThemeContext);

  const defaultStyles: RadioButtonGroupStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      justifyContent: 'space-between',
    },
    rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    flexView: { flex: 1 },
    row: { flexDirection: 'row' },
    imageWrapper: { width: 47, height: 47 },
    image: { width: '100%', height: '100%' },
    rowInfo: {
      height: 45,
      justifyContent: 'space-between',
      marginLeft: 10,
      paddingVertical: 2,
      flex: 1,
    },
    selectedRadioBtn: { flex: 1, backgroundColor: '#14BDEB', borderRadius: 20 },
    radioBtn: {
      marginLeft: 15,
      width: 30,
      height: 30,
      borderRadius: 20,
      borderColor: '#14BDEB',
      borderWidth: 1,
      padding: 4,
    },
    mainTitle: {
      fontFamily: fonts.medium,
      color: '#020000',
      fontSize: 14,
    },
    title: {
      fontFamily: fonts.regular,
      color: '#020000',
      fontSize: 14,
    },
    subTitle: {
      fontFamily: fonts.regular,
      color: '#4E4B50',
      fontSize: 10,
    },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
