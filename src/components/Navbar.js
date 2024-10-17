import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
const Navbar = (props) => {
    const isloginIn=props.isloginIn;
    const SetIsloggedIn=props.SetIsloggedIn;
    // <Login SetisloginIn={SetisloginIn}/>
    
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to='/'><img src={logo} width={50} height={32} loading='lazy' alt='students'/></Link>
    <nav>
        <ul className='flex gap-x-6 text-white'>
<li><Link to='/'>Home</Link></li>
<li><Link to='/'>About</Link></li>
<li><Link to='/'>Contact</Link></li>
        </ul>
    </nav>
<div className='flex items-center gap-x-4'>
{!isloginIn &&
    <Link to='/login'>
        <button className='bg-[#475569] text-white py-[8px] px-[12px] rounded-[8px] border border-[#cbd5e1]'>Login</button>
    </Link>
}
{!isloginIn &&
    <Link to='/signup'>
        <button className='bg-[#475569] text-white py-[8px] px-[12px] rounded-[8px] border border-[#cbd5e1]'   onClick={()=>{
            SetIsloggedIn(false);
toast.success("Logged Out");
        }}>Signup</button>
    </Link>
}
{isloginIn &&
    <Link to='/'>
        <button className='bg-[#475569] text-white py-[8px] px-[12px] rounded-[8px] border border-[#cbd5e1]' onClick={()=>{
           SetIsloggedIn(false);
toast("Logged Out");
        }}
        >Signout</button>
    </Link>
}
{isloginIn && 
    <Link to='a'>
        <button className='bg-[#475569] text-white py-[8px] px-[12px] rounded-[8px] border border-[#cbd5e1]a'>Dashboard</button>
    </Link>
}


</div>


    </div>
  )
}

export default Navbar
