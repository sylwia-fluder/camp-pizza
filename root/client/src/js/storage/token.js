import { STORAGE } from '../constants/';

const setToken = token => sessionStorage.setItem(STORAGE.TOKEN, token);
const getToken = () => sessionStorage.getItem(STORAGE.TOKEN);
const removeToken = () => sessionStorage.removeItem(STORAGE.TOKEN);
const isToken = getToken() !== null;
const getTokenToFetch = () => `Bearer ${getToken()}`;

export { setToken, getToken, isToken, removeToken, getTokenToFetch };
