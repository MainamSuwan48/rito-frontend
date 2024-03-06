import axios from '../config/axios';

// api

export const getMyCart = () => axios.get('/carts/me');
export const addItem = (data) => axios.post('/carts', data);
export const deleteItem = (cartId) => axios.delete(`/carts/${cartId}`);
export const deleteMyCart = (userId) => axios.delete(`/carts/user/${userId}`);
