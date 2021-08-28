import { SET_MAX_WINDOW_HEIGHT } from '../types/config';

const INITIAL_STATE = {
  MAX_WINDOW_HEIGHT: 500,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAX_WINDOW_HEIGHT:
      return {
        ...state,
        MAX_WINDOW_HEIGHT: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
