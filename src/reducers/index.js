import { combineReducers } from 'redux';
import { GoLivesReducer}  from './reducer_golives';

const rootReducer = combineReducers({
  golives: GoLivesReducer
});

export default rootReducer;