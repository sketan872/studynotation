import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children,isloginIn}) => {
  
if(isloginIn)
    {
       return children;
    }    
    else{
        <Navigate to="/login"/>
    }
      

  
}

export default PrivateRoute
