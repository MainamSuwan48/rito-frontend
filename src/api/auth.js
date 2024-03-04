import axios from '../config/axios';

// Api

export const login = (data) => axios.post('/user/login', data);
export const register = (data) => axios.post('/user/register', data);
export const getMe = (id) => axios.get(`/user/me`);
