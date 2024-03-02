import axios from '../config/axios';

// Api มาไว้นี้

export const login = (data) => axios.post('/user/login', data);
export const register = (data) => axios.post('/user/register', data);
export const getMe = (id) => axios.get(`/user/${id}`);
