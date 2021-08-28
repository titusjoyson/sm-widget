import { SET_MAX_WINDOW_HEIGHT } from '../types/config';

// eslint-disable-next-line import/prefer-default-export
export const setMaxWindowHeight = (height) => {
  return {
    type: SET_MAX_WINDOW_HEIGHT,
    value: height,
  };
};
