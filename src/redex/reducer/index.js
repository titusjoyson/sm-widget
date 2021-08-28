import { combineReducers } from 'redux';
import settingsReducer from './settings';
import configReducer from './config';

const rootReducer = combineReducers({
  settings: settingsReducer,
  config: configReducer,
});

export default rootReducer;
