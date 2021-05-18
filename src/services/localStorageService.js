const access_token = "token";

const setToken = (token) => {
  localStorage.setItem(access_token, token);
};
const getToken = () => localStorage.getItem(access_token);

const clearToken = () => localStorage.removeItem(access_token);

const clearAll = () => localStorage.clear();
export { setToken, getToken, clearToken, clearAll };
