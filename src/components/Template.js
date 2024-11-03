import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const Template = ({title,desc1,desc2,image,formtype,SetIsloggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0s] '>
    <div className='w-11/12 max-w-[450px mx-0 ]'>
        <h1 className='bg-[#0f172a] font-semibold text-[1.875rem] leading-[2.375rem ] text-white'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4 '>
            <span className='text-green-200' >{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>

        </p>
        {formtype==='signup'? (<SignupForm SetIsloggedIn={SetIsloggedIn}/>):
        (<LoginForm SetIsloggedIn={SetIsloggedIn}/>)  }
        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-white'></div>
        <div className='text-white '>OR</div>
        <div className=' w-full h-[1px] bg-white'></div>
        
        </div>
        <button className='w-full  flex justify-center items-center rounded-[8px] font-medium text-white border border-white px-[12px] py-[8px] gap-x-2 mt-[-540px]'>
        <FcGoogle/>
            <p>Sign up with google</p>
        </button>
        
    </div>
      <div>
<img src={image} alt='students'
    width={558} 
height={504}
  loading='lazy'
/>


      </div>
    </div>
  )
}

export default Template
