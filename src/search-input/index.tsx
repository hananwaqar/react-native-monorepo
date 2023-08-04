import React, { useContext, useState } from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { SearchIcon } from '../assets/search.icon';
import useMergeStyles from './theme';
import { ThemeContext } from '../theme-context/context';
import { SearchInputProps, SearchInputStyles } from './types';
import { useDebounce } from '../hooks/useDebounce';

const SearchInput = (props: SearchInputProps) => {
  const {
    onFocus,
    onBlur,
    onClearText,
    onChangeText,
    searchIcon,
    placeholder,
    placeholderTextColor,
    inputStyles,
    debounceTimeout,
    onChangeTextDebounce,
    ...restProps
  } = props;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<string>('');

  const debounceValue = useDebounce<string>(value, debounceTimeout ?? 300);
  const styles: SearchInputStyles = useMergeStyles(inputStyles);
  const { colors } = useContext(ThemeContext);

  React.useEffect(() => {
    if (debounceValue.length > 0) {
      onChangeTextDebounce && onChangeTextDebounce(value);
    } else {
      onClearText && onClearText();
    }
  }, [debounceValue]);

  const handleOnFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setActive(true);
    onFocus && onFocus(event);
  };

  const handleOnBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setActive(false);
    onBlur && onBlur(event);
  };

  const onValueChange = (s: string) => {
    setValue(s);
    onChangeText && onChangeText(s);
  };

  return (
    <View style={styles.containerStyle}>
      <>
        <TextInput
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChangeText={onValueChange}
          value={value}
          placeholder={placeholder}
          style={[styles.textInputStyle, active && styles.activeInputBorderColor]}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : colors.placeholderColor
          }
          {...restProps}
        />
        {searchIcon ? (
          searchIcon
        ) : (
          <View style={styles.searchIconWrapper}>
            <SearchIcon size={25} />
          </View>
        )}
      </>
    </View>
  );
};

export default SearchInput;
