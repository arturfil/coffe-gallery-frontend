import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authService"
import LoginView from "../views/LoginView";

const AdminRoute = () =>{ 
  const user = isAuthenticated();

  return user.role === 'ADMIN' ? <Outlet/> : <LoginView/>
}

export default AdminRoute;