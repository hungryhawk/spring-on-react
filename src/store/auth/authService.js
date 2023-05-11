import axios from "axios";

// const API_URL_REGISTER =
//   "https://backend-deploy-5afh.onrender.com/api/register";
// const API_URL_LOGIN = "https://backend-deploy-5afh.onrender.com/api/login";

const API_URL_REGISTER = "http://localhost:5000/api/register";
const API_URL_LOGIN = "http://localhost:5000/api/login";

const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  // if (response.data) {
  //   localStorage.setItem("token", JSON.stringify(response.data.token));
  // }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
