import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  backgroundColor?: string;
}

const ToolTipIcon: React.FC<Props> = ({
  size = 22,
  backgroundColor = '#DDD9E4',
  color = '#3E2D68',
}) => {
  return (
    <SvgCss
      xml={`<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12.5C9.31371 12.5 12 9.81371 12 6.5C12 3.18629 9.31371 0.5 6 0.5C2.68629 0.5 0 3.18629 0 6.5C0 9.81371 2.68629 12.5 6 12.5Z" fill="${backgroundColor}"/>
      <path d="M4.25391 4.7C4.39497 4.299 4.6734 3.96086 5.03988 3.74548C5.40636 3.5301 5.83724 3.45136 6.25621 3.52323C6.67518 3.59509 7.0552 3.81291 7.32895 4.13812C7.60271 4.46332 7.75254 4.87491 7.75191 5.3C7.75191 6.5 5.95191 7.1 5.95191 7.1" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 9.5H6.00397" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
      width={size}
      height={size}
    />
  );
};
export { ToolTipIcon };
