import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
const apiUrl = process.env.REACT_APP_API_URL;

// POST/Login
export const loginUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/login`, user);
  try {
    console.log(response.data);
    if (response.data) {
      const { _id, role,  } = response.data;
      localStorage.setItem("jwtcoffeegallery", JSON.stringify({id: _id, role}));
    }
    // navigate("/")
  } catch (error) {
    console.log(error);
  }
  return response;
}

// POST/Signup
export const signUpUser = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/signup`, user);
  // navigate("/signup")
  return response;
}

// isAuth()
export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwtcoffeegallery')) {
    return JSON.parse(localStorage.getItem("jwtcoffeegallery"));
  }
  return false;
}