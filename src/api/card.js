import axios from 'axios';

const CARD_API = window.location.protocol + '//' + window.location.host +'/public/json/card.json';

const getCard = (cardId) => {
    return axios.get(CARD_API);
}

const getCards = (categoryId) => {
    return axios.get(CARD_API);
}

export {getCard, getCards};