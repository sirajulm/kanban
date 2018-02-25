import * as types from '../constants/actionTypes';

export const showCategoryModal = () => ({
    type: types.ADD_CATEGORY_REQUEST
});

export const hideCategoryModal = () => ({
    type: types.ADD_CATEGORY_DISMISS
});

export const showCardModal = (id) => ({
    type: types.ADD_CARD_REQUEST,
    id
});
export const hideCardModal = (id) => ({
    type: types.ADD_CARD_DISMISS,
    id
});