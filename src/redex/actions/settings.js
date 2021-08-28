import { THEME_DARK_TITLE_BAR, THEME_DARK_THEME } from '../types/settings';

export const toggleTitleBarTheme = () => {
  return {
    type: THEME_DARK_TITLE_BAR,
  };
};

export const toggleDarkTheme = () => {
  return {
    type: THEME_DARK_THEME,
  };
};
