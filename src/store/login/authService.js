import axios from "axios";

// const API_URL = "http://localhost:5000/api/login";
const API_URL = "https://backend-3raa.onrender.com/api/login";

// Login user

const login = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

const authService = {
  login,
};

export default authService;
