import axios from 'axios';

const CATEGORY_API = 'http://localhost:8080/src/public/json/category.json';

const getCategory = (categoryId) => {
    return axios.get(CATEGORY_API);
}

const getCategories = () => {
    return axios.get(CATEGORY_API);
}

export {getCategory, getCategories};