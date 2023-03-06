import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import todos from './todos';

const rootReducer = combineReducers({
  auth,
  loading,
  todos
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;