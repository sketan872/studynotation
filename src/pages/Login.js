import React from 'react'
import login from '../assets/login.jpg'
import Template from '../components/Template'
const Login = ({SetIsloggedIn}) => {
  return (
    <div>
      <Template 
title="Welcome Back"
desc1="Build skills for today,tommorow,and beyond."
desc2="Education to further-proof your carrer"
image={login}
formtype="login"
SetIsloggedIn={SetIsloggedIn}
      />
    </div>
  )
}

export default Login
