import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import HomeView from './views/HomeView';
import CoffeeDetails from './views/CoffeeDetails';
import BeansView from './views/BeansView';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/beans" element={<BeansView/>} />
        <Route path="/coffee/:id" element={ <CoffeeDetails /> } />
      </Routes>
    </>     
  );
}

export default App;
