import { combineReducers } from 'redux';
import { NewIXSUserReducer}  from './reducer_newixsuser';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  main: NewIXSUserReducer,
  form: formReducer
});

export default rootReducer;