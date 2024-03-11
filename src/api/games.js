import axios from '../config/axios';

// api

export const getGames = () => axios.get('/games/');
export const getGame = (id) => axios.get(`games/${id}`);
export const getGameByUserId = (id) => axios.get(`/games/user/${id}`);
export const getGameByGenre = (id) => axios.get(`/games/genres/${id}`);
export const getAllGenres = () => axios.get('/genres/');
export const getAllPlatforms = () => axios.get('/platforms/');
export const searchGames = (query) => axios.get(`/games/search/${query}`);
export const searchTags = (query) => axios.get(`/tags/search/${query}`);
export const createGame = (formData) => axios.post('/games', formData);
export const updateGame = (formData, gameId) =>
  axios.patch(`/games/${gameId}/update`, formData);
