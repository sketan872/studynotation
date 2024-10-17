import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const SignupForm = ({SetIsloggedIn}) => {
    const [isVisible,SetisVisible]=useState(false)
    const navigate=useNavigate();
    const [accounttype,Setaccounttype]=useState("student")
    const [formData,SetformData]=useState({
        Firstname:"",
        Lastname:"",
        Email:"",   
        createpassword:"",
        confirmpassword:""
    })
    function changeHandler(event){
const {name,value}=event.target;
SetformData((prev)=>(    {...prev,[name]:value}
))}
function SubmitHandler(event){
event.preventDefault();
if(formData.createpassword!==formData.confirmpassword)
{
    toast.error("Both password does not match ")
return;}
SetIsloggedIn(true);
toast.success("Account Created");
const accountData={
    ...formData
};
console.log(accountData);
navigate("/dashboard")
}
  return (
    <div className='h-[450px]'>
      <div className='flex bg-green-50 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accounttype==="student"?"bg-[#0f172a] text-white":"bg-slate-500 text-slate-200 transition-all duration-1" } py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{
          Setaccounttype("student");
        }}>
Student 
        </button>
        <button className={`${accounttype==="instructor"?"bg-[#0f172a] text-white":"bg-slate-500 text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`} 
         onClick={()=>{
          Setaccounttype("instructor");
        }}>
Instructor
        </button>
      </div>
      <form onSubmit={SubmitHandler} className='flex flex-col w-full h-[1200px] gap-y-4 mt-6'>
<div>
<label>

<p className='text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-500'>*</sup></p>
<input  className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
required
type='text'
placeholder='Enter your First Name'
onChange={changeHandler}
name='Firstname'
value={formData.Firstname}

/>
</label>
<label>

<p className='text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-500'>*</sup></p>
<input  className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
required
type='text'
placeholder='Enter your Last Name'
onChange={changeHandler}
name='Lastname'
value={formData.Lastname}

/>
</label>
</div>
<div>
<label>

<p className='text-white mb-1 leading-[1.375rem]'>Email Address<sup  className='text-pink-500'>*</sup></p>
<input  className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
required
type='email'
placeholder='Enter your Email'
onChange={changeHandler}
name='Email'
value={formData.Email}

/>
</label>
</div>
<div>
<label className='relative'>

<p className='text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-500'>*</sup></p>
<input  className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
required
type={isVisible?("text"):("password")}
placeholder='Enter your First Name'
onChange={changeHandler}
name='createpassword' 
value={formData.password}

/>
<span className='absolute left-[92%] top-[40px] cursor-pointer' 
onClick={()=>SetisVisible((prev)=>!prev)}>
{isVisible?(<IoEyeSharp />):(<FaEyeSlash/>)}</span>

</label>
<label>

<p className='text-white mb-1 leading-[1.375rem]' >Confirm password<sup className='text-pink-500'>*</sup></p>
<input  className='w-[300px] h-[35px] bg-slate-300 text-slate-800 rounded-[0.5rem] p-[12px]'
required
type={isVisible?("text"):("password")}
placeholder='Enter your Confirm password'
onChange={changeHandler}
name='confirmpassword'
value={formData.confirmpassword}

/>
<span className='absolute left-[26%] top-[600px] cursor-pointer' 
onClick={()=>SetisVisible((prev)=>!prev)}>
{isVisible?(<IoEyeSharp />):(<FaEyeSlash/>)}</span>
</label>


</div>


<button className='bg-yellow-500 rounded-[8px] font-medium text-slate-500 px-[12px] py-[8px] w-[300px]'>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
