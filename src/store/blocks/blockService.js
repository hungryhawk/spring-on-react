import axios from "axios";

const API_URL = "http://localhost:5000/api/blocks";

const getBlocks = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("token"));

    // const response = await axios.get(API_URL);
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + user,
      },
    });
    return response.data;
  } catch (error) {
    // localStorage.removeItem('token');
    // window.location = '/login';
  }
};

const blockService = {
  getBlocks,
};

export default blockService;
