import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ViewStyle,
  StyleProp,
  ImageStyle,
  TextStyle,
} from 'react-native';
import useMergeStyles from './theme';

export type RadioButtonItem = {
  title: string;
  subTitle?: string;
  rightTitle?: string;
  rightSubTitle?: string;
  imageUrl?: string;
  value: string;
};

export type RadioButtonGroupProps = {
  data: RadioButtonItem[];
  onSelect: (value: string) => void;
  selectedValue?: string;
  style?: RadioButtonGroupStyles;
};

export type RadioButtonGroupStyles = {
  container?: StyleProp<ViewStyle>;
  rowBetween?: StyleProp<ViewStyle>;
  flexView?: StyleProp<ViewStyle>;
  row?: StyleProp<ViewStyle>;
  imageWrapper?: StyleProp<ViewStyle>;
  image?: StyleProp<ImageStyle>;
  rowInfo?: StyleProp<ViewStyle>;
  radioBtn?: StyleProp<ViewStyle>;
  selectedRadioBtn?: StyleProp<ViewStyle>;
  mainTitle?: StyleProp<TextStyle>;
  title?: StyleProp<TextStyle>;
  subTitle?: StyleProp<TextStyle>;
};

const RadioButtonGroup = ({ data, onSelect, selectedValue, style }: RadioButtonGroupProps) => {
  const styles: RadioButtonGroupStyles = useMergeStyles(style);

  return (
    <>
      {data.map((item, index) => (
        <TouchableOpacity key={`${item.title}-${index}`} style={styles.container} onPress={() => onSelect(item.value)}>
          <View style={[styles.rowBetween, styles.flexView]}>
            <View style={styles.row}>
              {item.imageUrl && (
                <View style={styles.imageWrapper}>
                  <Image style={styles.image} source={{ uri: item.imageUrl }} />
                </View>
              )}
              <View style={styles.rowInfo}>
              {(item.title || item.rightTitle) && <View style={styles.rowBetween}>
                  <Text style={styles.mainTitle}>{item.title}</Text>
                  <Text style={styles.title}>{item.rightTitle}</Text>
                </View>}
                {(item.subTitle || item.rightSubTitle) && <View style={styles.rowBetween}>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  <Text style={styles.subTitle}>{item.rightSubTitle}</Text>
                </View>}
              </View>
            </View>
          </View>
          <View style={styles.radioBtn}>
            {selectedValue === item.value && <View style={styles.selectedRadioBtn} />}
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RadioButtonGroup;
