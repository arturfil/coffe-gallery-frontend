import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()

const apiUrl = process.env.REACT_APP_API_URL;

// GET/coffees
export const getAllCoffees = async () => {
  const response = await axios.get(`${apiUrl}/coffees`);
  return response;
}

// GET/SingleCoffe
export const getSingleCoffeeFromApi = async (id) => {
  const reponse = await axios.get(`${apiUrl}/coffees/coffee/${id}`);
  return reponse;
}

// POST/coffee
export const createCoffeeInApi = async (coffee) => {
  const {image, ...newCoffee} = coffee;
  console.log("CREATE", newCoffee);
  const response = await axios.post(`${apiUrl}/coffees/coffee`, newCoffee);
  await imageUploadToApi(response.data._id, image)
  alert("Coffee created successfully");
}

// POST/image
export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append('image', img);
  const response = axios.post(`${apiUrl}/coffees/coffee/imageUpload/${id}`, formData);
  return response;
}

// POST/coffees/coffee/id
export const updateCoffeeInApi = async (obj) => {
  const { image, ...coffee} = obj;
  const response = await axios.put(`${apiUrl}/coffees/coffee/${obj._id}`, coffee);
  alert("Updated Coffee Successfully")
  return response;
}

export const deleteCoffeeInApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/coffees/coffee/${id}`);
  return response;
}