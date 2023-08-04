import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const SearchIcon: React.FC<Props> = ({ size }) => {
  return (
    <SvgCss
      xml={`<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66667 15.8333C13.3486 15.8333 16.3333 12.8486 16.3333 9.16667C16.3333 5.48477 13.3486 2.5 9.66667 2.5C5.98477 2.5 3 5.48477 3 9.16667C3 12.8486 5.98477 15.8333 9.66667 15.8333Z" stroke="#1D1C1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 17.5L14.375 13.875" stroke="#1D1C1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>    
      `}
      width={size}
      height={size}
    />
  );
};
export { SearchIcon };
