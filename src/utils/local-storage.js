export const storeToken = (token) => localStorage.setItem('accessToken', token);
export const getToken = () => localStorage.getItem('accessToken');
export const deleteToken = () => localStorage.removeItem('accessToken');
