import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import HomeView from './views/HomeView';
import CoffeeDetailsView from './views/CoffeeDetailsView';
import BeansView from './views/BeansView';
import SignupView from './views/SignupView';
import LoginView from './views/LoginView';
import AddCoffeeView from './views/AddCoffeeView';
// import AuthRoute from './components/AuthRoute';
import AddBeanView from './views/AddBeanView';
import EditCoffeeView from './views/EditCoffeeView';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/signup" element={<SignupView/>} />
        <Route path="/login" element={<LoginView/> } />
        <Route path="/addCoffee" element={<AddCoffeeView/>} />
        <Route path="/addBean" element={<AddBeanView/>} />
        <Route path="/editCoffee/:id" element={<EditCoffeeView/> } />
        <Route path="/beans" element={<BeansView/>} />
        <Route path="/coffee/:id" element={ <CoffeeDetailsView /> } />
      </Routes>
    </>     
  );
}

export default App;
