import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.modals, action) {
    switch (action.type) {
      
      case types.ADD_CARD_REQUEST:
      return {...state, ...{showCardModal: true, categoryId: action.id}}
      
      case types.ADD_CATEGORY_REQUEST:
        return {...state, ...{showCategoryModal: true}}

      case types.ADD_CARD_DISMISS:
      return {...state, ...{showCardModal: false, categoryId: action.id}}
      
      case types.ADD_CATEGORY_DISMISS:
        return {...state, ...{showCategoryModal: false}}

      default:
        return {...state};
    }
  }