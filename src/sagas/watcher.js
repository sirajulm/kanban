import { takeLatest, takeEvery } from 'redux-saga/effects';
import { getCategoriesSaga } from './categorySaga';
import { getCardsSaga } from './cardSaga';
import * as types from '../constants/actionTypes';

function* watchGetCategories() {
  yield takeLatest(types.GET_CATEGORIES, getCategoriesSaga);
}

function* watchGetCards() {
  yield takeEvery(types.GET_CARDS, getCardsSaga);
}

export {watchGetCards, watchGetCategories}