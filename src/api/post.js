import exp from 'constants';
import axios from '../config/axios';

export const getAllPost = () => axios.get('/post');
export const getPostById = (postId) => axios.get(`/post/${postId}`);

export const createPost = (data) => axios.post('/post', data);

export const findLikePost = (postId) => axios.get(`/like/post/${postId}`);

// Like and unlike post
export const toggleLikePost = (postId) => axios.post(`/like/post/${postId}`);
