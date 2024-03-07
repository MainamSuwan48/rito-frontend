import axios from '../config/axios';

// Api

export const login = (data) => axios.post('/user/login', data);
export const register = (data) => axios.post('/user/register', data);
export const getMe = (id) => axios.get(`/user/me`);
export const updateAuthUser = (id, data) =>  axios.put(`/user/${id}`, data);
export const updateProfileImage = (id, data) => {
    console.log(data,"************************data in api")
    axios.put(`/user/${id}/profileImage`, data)};
