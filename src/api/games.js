import axios from '../config/axios';

// api

export const getGames = () => axios.get('/games/');
export const getGame = (id) => axios.get(`games/${id}`);
export const getGameByUserId = (id) => axios.get(`/games/user/${id}`);
export const getGameByGenre = (id) => axios.get(`/games/genres/${id}`);
export const getAllGenres = () => axios.get('/genres/');
