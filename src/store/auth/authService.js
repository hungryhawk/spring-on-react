import axios from "axios";

const API_URL_REGISTER = "http://localhost:5000/api/register";
const API_URL_LOGIN = "http://localhost:5000/api/login";

const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
