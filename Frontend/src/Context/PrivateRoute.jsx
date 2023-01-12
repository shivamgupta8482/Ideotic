import {Navigate, useNavigate} from "react-router-dom"

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { MakeContext } from "./AppContext";


const PrivateRoute = ({children}) => {
   

    const { isAuth } = useContext(MakeContext);
    const navigate = useNavigate();
 
console.log(isAuth);
if (!isAuth && !localStorage.getItem("token")) {
    return <Navigate to="/login" ></Navigate>;
  }
    
    return children;
};

export default PrivateRoute;