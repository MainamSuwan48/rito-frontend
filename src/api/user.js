import axios from '../config/axios';

//api

export const getAllUser = () => axios.get('/user');
export const getUserById = (id) => axios.get(`/user/${id}`);
//collection
export const getUserGames = (id) => axios.get(`/games/user/${id}/`);
//wishlist
