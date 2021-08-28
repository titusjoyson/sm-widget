import { THEME_DARK_TITLE_BAR, THEME_DARK_THEME } from '../types/settings';

const INITIAL_STATE = {
  darkTheme: true,
  darkTitleBar: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME_DARK_TITLE_BAR:
      return {
        ...state,
        darkTitleBar: !state.darkTitleBar,
      };

    case THEME_DARK_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };

    default:
      return state;
  }
};

export default reducer;
