import { combineReducers } from 'redux';
import categories from './categoryReducer';
import cards from './cardReducer';

const rootReducer = combineReducers({
    categories, 
    cards
});

export default rootReducer;