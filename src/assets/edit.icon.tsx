import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const EditIcon: React.FC<Props> = ({ size }) => {
  return (
    <SvgCss
      xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1667 2.49993C14.3855 2.28106 14.6454 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1429 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7189 2.7188 17.8925 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8925 5.35455 17.7189 5.61439 17.5 5.83326L6.24999 17.0833L1.66666 18.3333L2.91666 13.7499L14.1667 2.49993Z" stroke="#3E2D68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
      width={size}
      height={size}
    />
  );
};
export { EditIcon };
