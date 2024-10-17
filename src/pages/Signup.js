import React from 'react'
import signnow from '../assets/signnow.webp'
import Template from '../components/Template'
const Signup = ({SetIsloggedIn}) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="Build skills for today,tommorow,and beyond."
    desc2="Education to further-proof your carrer"
    image={signnow}
    formtype="signup"
    SetIsloggedIn={SetIsloggedIn}
          /> )
}

export default Signup
