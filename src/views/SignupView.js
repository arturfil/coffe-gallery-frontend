import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userResponse = await axios.post(`${apiUrl}/auth/signup`, user);
    setUser({
      name: "",
      email: "",
      password: ""
    })
    alert("User Created");
  }

  return (
    <div>
      <form className="form">
        <h2>Sign Up</h2>
        <input
          value={user.name}
          name="name"
          onChange={handleChange}
          placeholder="name" 
          type="text" 
          className="form-control" 
        />
        <input
          value={user.email} 
          onChange={handleChange}
          name="email"
          placeholder="email" 
          type="text" 
          className="form-control" 
        />
        <input
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="password"
          className="form-control"
        />
        <button 
          onClick={handleSubmit}
          className="form-control btn btn-success">
            Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
