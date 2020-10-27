import { combineReducers } from 'redux';
import { mainReducer } from './main';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  mainReducer,
  form: formReducer
})