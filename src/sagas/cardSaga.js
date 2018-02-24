import { put, call } from 'redux-saga/effects';
import { getCard, getCards } from '../api/card';
import * as types from '../constants/actionTypes';

export function* getCardsSaga({ id, payload }) {
  try {
    const {data} = yield call(getCards, id);
    yield [
      put({ type: types.GET_CARDS_SUCCESS, id, cards: data })
    ];
  } catch (error) {
    yield put({ type: types.GET_CARDS_ERROR, error });
  }
}