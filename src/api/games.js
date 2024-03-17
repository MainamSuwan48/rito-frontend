import axios from '../config/axios';

// api

export const getGames = (page) => axios.get(`/games/?page=${page}`);
export const getGame = (id) => axios.get(`games/${id}`);
export const getRandomGames = () => axios.get('/games/random?count=15');
export const getGameByUserId = (id) => axios.get(`/games/user/${id}`);
export const getGameByGenre = (id,page) => axios.get(`/games/genres/${id}?page=${page}`);
export const getAllGenres = () => axios.get('/genres/');
export const getAllPlatforms = () => axios.get('/platforms/');
export const searchGames = (query) => axios.get(`/games/search/${query}`);
export const searchTags = (query) => axios.get(`/tags/search/${query}`);
export const createGame = (formData) => axios.post('/games', formData);
export const updateGame = (formData, gameId) =>
  axios.patch(`/games/${gameId}/update`, formData);
