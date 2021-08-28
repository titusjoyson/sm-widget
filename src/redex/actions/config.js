import { SET_MAX_WINDOW_HEIGHT } from '../types/config';

export const setMaxWindowHeight = (height) => {
  return {
    type: SET_MAX_WINDOW_HEIGHT,
    value: height,
  };
};
