import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';


interface IButton {
  background?: string;
  label: string;
  onPress?: () => void;
  labelColor?: string;
  isLoading?: boolean;
}
const ADBButton: React.FC<IButton> = (props: IButton) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, { backgroundColor: props.background ?? '#1B1B1B' }]}
    >
      {props.isLoading ? <ActivityIndicator /> :  <Text style={[styles.label, { color: props.labelColor ?? '#FCFCFC' }]}>{props.label}</Text>}
    </TouchableOpacity>
  );
};

export default ADBButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 100,
    padding: 16,
    borderWidth: 3,
    borderColor: '#1B1B1B',
  },
  label: {
    fontSize: 16,
    color: '#FCFCFC',
    textAlign: 'center',
  },
});
