import axios from '../config/axios';

// Api

export const login = (data) => axios.post('/user/login', data);
export const register = (data) => axios.post('/user/register', data);
export const getMe = (id) => axios.get(`/user/me`);
export const updateAuthUser = (id, data) => axios.put(`/user/${id}`, data);
export const forgotPassword = (data) =>
  axios.post('/user/forgot-password', data);
export const resetPassword = (data) =>
  axios.patch('/user/reset-password', data);
