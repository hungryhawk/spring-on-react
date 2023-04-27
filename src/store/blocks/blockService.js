import axios from "axios";

// const API_URL = "http://localhost:5000/api/login";
const API_URL = "https://backend-3raa.onrender.com/api/blocks";

// Login user

const getBlocks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const blockService = {
  getBlocks,
};

export default blockService;
