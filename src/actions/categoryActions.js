import * as types from '../constants/actionTypes';

export const getCategories = (id) => ({
    type: types.GET_CATEGORIES,
    id
});

export const addCategory = (category) => ({
    type: types.ADD_CATEGORY,
    category
});

export const deleteCategory = (id) => ({
    type: types.DELETE_CATEGORY,
    id
});

export const filterCards = ({id, filter}) => ({
    type: types.SET_VISIBILITY_FILTER,
    id,
    filter
});