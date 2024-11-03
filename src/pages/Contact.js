import React, { useState } from 'react';

const Contact = () => {
const [FormData2,SetFormData]=useState({
    Name:"",
    AdmissionNumber:"",
    MobileNumber:"",
Comments:"",



})
function OnChangeHandler(e){

    const {name,value}=e.target;
    SetFormData({
        ...FormData2,[name]:value
    });

}


    return (
    <div className='bg-[#0f172a] h-[470px]'>
      <form>
<label>
<p className=''>Name <sup className='text-pink-500'>*</sup></p>
<input onChange={OnChangeHandler} required name='Name' value={FormData2.Name} type="text" placeholder='Enter Your Name' />

</label>
<label>
    <p>Admission Number <sup className='text-pink-500'>*</sup></p>
    <input required  name='AdmissionNumber' type='text' value={FormData2.AdmissionNumber} placeholder='Enter your Admission Number' onChange={OnChangeHandler}/>
</label>
<label>
<p>Contact Number</p>
<input required name="MobileNumber" type='number' value={FormData2.MobileNumber} onChange={OnChangeHandler}></input>
</label>


      </form>
    </div>
  )
}

export default Contact
