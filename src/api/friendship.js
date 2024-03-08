import axios from "../config/axios";

// api

export const getAllFriendbyUserId = (userId) => axios.get(`/friendships/friends/${userId}`)
export const getAllMyPending = () => axios.get(`/friendships/pending`)
export const requestFriend = (targetUserId) => axios.post(`/friendships/${targetUserId}`)
export const acceptFriend = (targetUserId) => axios.patch(`/friendships/${targetUserId}/accept`)
export const rejectFriend = (targetUserId) => axios.patch(`/friendships/${targetUserId}/reject`)
export const cancelRequest = (targetUserId) => axios.post(`/friendships/${targetUserId}`)