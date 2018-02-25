import axios from 'axios';

const CARD_API = window.location.protocol + '//' + window.location.host +'/public/json/card.';

const getCard = (cardId) => {
    return axios.get(CARD_API);
}

const getCards = (categoryId) => {
    return axios.get(`${ CARD_API }${ categoryId }.json`);
}

export {getCard, getCards};