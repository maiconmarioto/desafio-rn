import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://desafio-mobile-pitang.herokuapp.com/movies',
});
