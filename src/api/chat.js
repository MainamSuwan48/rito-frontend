import axios from '../config/axios';

export const getHistoryChat = (receiverId) =>
  axios.get(`/chat/get-history/${receiverId}`);
