import jwtDecode from "jwt-decode";
const access = "cyberFratUser";

export const getJWT = (tokenName = access) => localStorage.getItem(tokenName);

export const setJWT = (token, tokenName = access) =>
  localStorage.setItem(tokenName, token);

export const cleanLocalStorage = () => {
  window.localStorage.clear();
};

export const getUserInfoFromJWT = (tokenName = access) => {
  const token = getJWT(tokenName);
  try {
    if (!token) return;
    return jwtDecode(token);
  } catch (error) {
    console.log("jwtDecode error", error);
    return false;
  }
};
