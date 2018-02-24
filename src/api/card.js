import axios from 'axios';

const CARD_API = 'http://localhost:8080/src/public/json/card.json';

const getCard = (cardId) => {
    return axios.get(CARD_API);
}

const getCards = (categoryId) => {
    return axios.get(CARD_API);
}

export {getCard, getCards};