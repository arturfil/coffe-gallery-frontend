import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import HomeView from './views/HomeView';
import CoffeeDetails from './views/CoffeeDetails';
import BeansView from './views/BeansView';
import SignupView from './views/SignupView';
import LoginView from './views/LoginView';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/signup" element={<SignupView/>} />
        <Route path="/login" element={<LoginView/> } />
        <Route path="/beans" element={<BeansView/>} />
        <Route path="/coffee/:id" element={ <CoffeeDetails /> } />
      </Routes>
    </>     
  );
}

export default App;
