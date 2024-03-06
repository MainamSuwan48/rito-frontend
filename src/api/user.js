import axios from "../config/axios";

//api

export const getAllUser = () => axios.get('/user');
export const getUserById = (id) => axios.get(`/user/${id}`);
export const updateUser = (id, data) =>{ 
    console.log(data);
    axios.put(`/user/${id}`, data)
};