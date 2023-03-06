import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../modules/loading';

/**
 * 더 쉬운 API 요청 상태 관리
 * @param type
 * @param request
 * @returns {(function(*): Generator<*, void, *>)|*}
 */

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      });
    }
    yield put(finishLoading(type));
  };
}

