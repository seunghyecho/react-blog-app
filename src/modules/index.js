import { combineReducers } from 'redux';
import auth from './auth';
import todos from './todos';

const rootReducer = combineReducers({
  todos,
  auth
});
export default rootReducer;