import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
   const [formData,setFormData]=useState({});
    const SubmitHandler=(e)=>{
      console.log(formData.email);
        e.preventDefault();
        const email=formData.email;
            axios.get(`http://localhost:2000/check/email/${email}`).then((res)=>{
       if(res.data.message==='you are success '){
         window.alert(`Welcom ${formData.email}`);
         window.location.href="./Welcom";
       }
        else if(res.data.message=='fail') {
            window.alert('please create account ');
            window.location.href='./Signup';
        } 
            })
    }
     const ChangeHandler=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value});
     }
  return (
    <div>
       <form onSubmit={SubmitHandler}>
         <input type={'text'} name='name' onChange={ChangeHandler} placeholder='Enter your name '/>
         <input type={'email'} name='email' onChange={ChangeHandler} placeholder='Enter your email '/>
         <input type={'submit'}   value="Login" />
       </form>
    </div>
  )
}

export default Login 
