import axios from '../config/axios';

export const getUnverifiedGames = () => axios.get('/admin/games/non-verified');
export const verifyGame = (gameId) =>
  axios.patch(`/admin/games/${gameId}/verify`);
export const deleteGame = (gameId) =>
  axios.patch(`/admin/games/${gameId}/delete`);
export const getAllChat = () => axios.get('/admin/chat/get');
