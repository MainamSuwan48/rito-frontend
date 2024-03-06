import axios from '../config/axios';

export const createSession = (paymentMethod) =>
  axios.post('/payments/create-checkout-session', paymentMethod);

export const getSessionStatus = (sessionId) =>
  axios.get(`/payments/session-status?session_id=${sessionId}`);
