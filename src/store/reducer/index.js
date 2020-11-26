import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { mainReducer } from './main';

export default combineReducers({
  mainReducer,
  form: formReducer
});
