import axios from "axios";

const API_URL = "http://localhost:5000/api/blocks";

const getBlocks = async () => {
  const response = await axios.get(API_URL);

  return response.data;
  // let token;

  // const response = await fetch(API_URL, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem('[user]')}`,
  //   },
  // });
  // const result = await response.json();
  // // return parseRes.data.data
  // console.log(result);
};

const blockService = {
  getBlocks,
};

export default blockService;
