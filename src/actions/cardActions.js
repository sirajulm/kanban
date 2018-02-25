import * as types from '../constants/actionTypes';

export const getCards = (id) => ({
    type: types.GET_CARDS,
    id
});
export const addCard = (payload) => ({
    type: types.ADD_CARD,
    payload
});

export const completeCard = ({id, categoryId, isComplete, completedAt}) => ({
    type: types.MARK_COMPETE_CARD,
    id,
    categoryId,
    isComplete,
    completedAt
});
export const deleteCard = (id) => ({
    type: types.DELETE_CARD,
    id
});