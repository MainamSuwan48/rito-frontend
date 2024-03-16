import axios from '../config/axios';

export const getAllPost = () => axios.get('/post');

// export const useCreatePost = () => axios.post('/post');
