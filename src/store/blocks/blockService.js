import axios from "axios";

const API_URL = "https://backend-deploy-5afh.onrender.com/api/blocks";

// const API_URL = "http://localhost:5000/api/blocks";

const getBlocks = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("accessToken"));

    const response = await axios.get(API_URL, {
      headers: {
        authorization: "Bearer " + user,
      },
    });
    return response.data.blocks;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
  }
};

const blockService = {
  getBlocks,
};

export default blockService;
