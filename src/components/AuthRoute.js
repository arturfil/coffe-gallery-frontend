import { Children, Component } from "react";
import { Navigate, Route } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import LoginView from "../views/LoginView";

const AuthRoute = ({children, path}) => {

   const { user} = isAuthenticated();

   return user.role ? children : <Navigate to={path} />
}

export default AuthRoute;