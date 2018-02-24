import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.cards, action) {

    switch (action.type) {

      case types.ADD_CARD:
        {
          const newState = {
            ...state, 
            ...{[action.payload.id]: [...state[action.payload.id], action.payload.card]}
          };
            return newState;
        }

      case types.DELETE_CARD:
        const newState = state.filter((item) => {
            return (item.id !== action.id)
        })
        return [...newState];

      case types.FILTER_CARDS:
        {
          let newState;
          if(action.filter !== undefined) {
            newState = state.filter((item) => {
              return (item.complete === action.complete)
            });
          } else {
            newState = [...state]
          }
          return newState;
        }

      case types.GET_CARDS:
        return {...state};

      case types.GET_CARDS_SUCCESS:
      { 
        const newState = {
          ...state, 
          ...{[action.id]: [
            ...(state[action.id] ? state[action.id] : []), 
            ...action.cards
          ]}
        };
        return newState;
      }

      case types.GET_CARDS_ERROR:
        return {...state};

      default:
        return {...state};
    }
  }