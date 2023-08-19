import axios from 'axios';
import React, { useState } from 'react'
import Footer from '../Footer';
const Login = () => {

const [inputData,setInputData]=useState("");
const Handle=(e)=>{
  e.preventDefault();
  console.log(inputData);
   if(!inputData.name || !inputData.email){
  axios
  .get('http://localhost:2000/Login', {
    params: {
      email: inputData.email,
      password: inputData.password
    }
  })
  .then(response => {
    if (response.data.message === 'Successfully logged in') {
      window.alert('Logged in');
      window.location.href = './Home';
    } else {
      window.alert('Email or password is incorrect');
    }
  })
  .catch(err => {
    console.error(err);
  });


}
 else {
   window.alert('Please Enter all input required field first ');;
 }
 }

  
  const ChangHandle = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
 <>
 
 <div className='sign-form'>
      
      <form className='submit-form' onSubmit={Handle}>
         <img src='https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png-300x300.png' />
    
          <input type="email" name="email" onChange={ChangHandle}/>
          <input type="password" name="password" onChange={ChangHandle}/>
          <input type="submit" value="submit" />
      </form>
  </div>
   <Footer/>
 </>
  )
  }

export default Login