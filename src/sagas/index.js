import { fork } from 'redux-saga/effects';
import {watchGetCards, watchGetCategories} from './watcher';

export default function* startForman() {
    yield [
        fork(watchGetCategories),
        fork(watchGetCards)
    ];
}