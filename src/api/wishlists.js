import axios from '../config/axios';

export const getMyWishlist = () => axios.get(`/wishlists/me`);
export const addGameToWishlist = (data) => axios.post(`/wishlists/`, data);
