import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = ( {SetIsloggedIn}) => {
    const navigate=useNavigate();
    const [formData,SetformData]=useState({
        Email:"",
        password:""
    })
const [showPassword,SetShowpassword]=useState(false);
function changehandler(event){
const {name,value}=event.target;
SetformData((prevData)=>(
    {
        ...prevData,[name]:value
    }
))
}

function SubmitHandler(event)
{
    event.preventDefault();
    SetIsloggedIn(true);
    toast.success("Logged Success");
navigate("/dashboard    ")
}



return (
    <form onSubmit={SubmitHandler} className='flex flex-col w-full gap-y-4 mt-6' >
        <label >
            <p className='text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
        </label>
    <input  className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
    required
    type='text'
    placeholder='Enter your email'
    name='email'
    value={formData.email}    
    onChange={changehandler}
    />
    
    <label className='relative w-full'>
            <p className='text-white mb-1 leading-[1.375rem]' >Password <sup className='text-pink-200'>*</sup></p>
        
    <input className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
    required
    type={showPassword?('text'):('password')}
    placeholder='Enter your password'
    value={formData.passowrd}    
    name='password'
        onChange={changehandler}
    />
    <span className='absolute left-[38%] top-[36px] cursor-pointer'  
    onClick={()=>SetShowpassword((prev)=>!prev)}>

 

    {showPassword?(<IoEyeSharp fontSize={20} fill='#AFB2UF'/>):(<FaEyeSlash fontSize={20} fill='#AFB2UF'/>)}</span>
    
    <Link to='#' ><p className='text-blue-500 text-xs mt-2 max-w-[520px] ml-auto'>Forget password</p> </Link>
    
    </label>

<button className='bg-yellow-500 rounded-[8px] font-medium text-slate-500 px-[12px] py-[8px] w-[300px]'>Sign In</button>
    </form>
    
  )
}

export default LoginForm;
