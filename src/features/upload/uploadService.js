import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

// Image upload function
const uploadImg = async (data) => {
  const response = await axios.post(`${base_url}upload`, data, config);
  return response.data;
};

// Image delete function
const deleteImg = async (id) => {
  const response = await axios.delete(`${base_url}upload/delete-image/${id}`, config);
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
