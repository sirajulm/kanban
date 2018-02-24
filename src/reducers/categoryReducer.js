import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.categories, action) {
    switch (action.type) {

      case types.ADD_CATEGORY:
        return [...state, action.category];

      case types.SET_VISIBILITY_FILTER:
        return state.map((category)=>{
          if(category.id === action.id) {
            category.filter = action.filter;
          }
          return category;
        });

      case types.DELETE_CATEGORY:
        {
          const newState = state.filter((item) => {
            return (item.id !== action.id)
          })
          return [...newState];
      }

      case types.GET_CATEGORIES:
        return [...state];

      case types.GET_CATEGORIES_SUCCESS:
        return [...state, ...action.categories];

      case types.GET_CATEGORIES_ERROR:
        return [...state];

      default:
        return [...state];
    }
  }