import { Outlet } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = () => {
  
  const user = useSelector((state) => state.user?.user?.isAdmin);

let admin = user  ? <Outlet/> :<Navigate to='/login'/>
  return admin

  
 
};

export default Auth;
