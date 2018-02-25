import { combineReducers } from 'redux';
import categories from './categoryReducer';
import cards from './cardReducer';
import modals from './modalReducer';

const rootReducer = combineReducers({
    categories, 
    cards,
    modals
});

export default rootReducer;