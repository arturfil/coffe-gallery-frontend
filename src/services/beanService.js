import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// GET/beans
export const getAllBeans = async () => {
  const response = await axios.get(`${apiUrl}/beans`);
  return response;
}

// POST/bean
export const createBean = async (bean) => {
  const response = await axios.post(`${apiUrl}/beans/bean`, bean);
  alert("Created BEan successfully");
  return response;
}

// DELETE/bean/:id
export const deleteBeanInApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/beans/bean/${id}`);
  return response;
}