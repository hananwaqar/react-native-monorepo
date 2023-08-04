export type ThemeColorProps = {
  primaryColor?: string;
  secondaryColor?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  backgroundTextColor?: string;
  errorTextColor?: string;
  primaryButtonColor?: string;
  secondaryButtonColor?: string;
  primaryButtonLabelColor?: string;
  secondaryButtonLabelColor?: string;
  mainBackgroundColor?: string;
  secondaryBackgroundColor?: string;
  dividerColor?: string;
  appBarBackgroundColor?: string;
  appBarTextColor?: string;
  loadingIndicatorColor?: string;
  inActiveInputBorderColor?: string;
  activeInputBorderColor?: string;
  errorInputBorderColor?: string;
  backgroundSearchInput?: string;
  placeholderColor?: string;
};

export const defaultColors: ThemeColorProps = {
  primaryColor: '#0073F0',
  secondaryColor: '#0073F0',
  primaryTextColor: '#0C3F79',
  secondaryTextColor: '#0C3F79',
  backgroundTextColor: '#FFFFFF',
  errorTextColor: '#D32F2F',
  primaryButtonColor: '#0073F0',
  secondaryButtonColor: '#ffffff',
  primaryButtonLabelColor: '#ffffff',
  secondaryButtonLabelColor: '#0073F0',
  mainBackgroundColor: '#ffffff',
  secondaryBackgroundColor: '#f7f9fb',
  dividerColor: '#e2e2e2',
  appBarBackgroundColor: '$ffffff',
  appBarTextColor: '#0C3F79',
  loadingIndicatorColor: '#0073F0',
  activeInputBorderColor: '#0073F0',
  errorInputBorderColor: '#D32F2F',
  inActiveInputBorderColor: '#E6E6E6',
  backgroundSearchInput: '#F1F6FC',
  placeholderColor: '#BAB7BB',
};

export const rgbToHex = (color: string) => {
  const a = color.replace(/[^\d,]/g, '').split(',');
  return '#' + ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1);
};

export const addAlpha = (color: string, opacity: number) => {
  if (!color.startsWith('#')) {
    color = rgbToHex(color);
  }
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16)?.toUpperCase();
};
