import axios from 'axios';

const CATEGORY_API = window.location.protocol + '//' + window.location.host +'/public/json/category.json';

const getCategory = (categoryId) => {
    return axios.get(CATEGORY_API);
}

const getCategories = () => {
    return axios.get(CATEGORY_API);
}

export {getCategory, getCategories};