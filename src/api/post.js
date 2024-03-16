import exp from 'constants';
import axios from '../config/axios';

export const getAllPost = () => axios.get('/post');
// export const useCreatePost = () => axios.post('/post');

// Like and unlike post
export const toggleLikePost = (postId) => axios.post(`/like/post/${postId}`);
