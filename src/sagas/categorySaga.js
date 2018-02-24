import { put, call } from 'redux-saga/effects';
import { getCategory, getCategories } from '../api/catergory';
import * as types from '../constants/actionTypes';

export function* getCategoriesSaga({ payload }) {
  try {
    const {data} = yield call(getCategories, payload);
    yield [
      put({ type: types.GET_CATEGORIES_SUCCESS, categories: data })
    ];
  } catch (error) {
    yield put({ type: types.GET_CATEGORIES_ERROR, error });
  }
}