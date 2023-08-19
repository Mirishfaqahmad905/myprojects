import React, { useState } from 'react'
 import axios from 'axios';
 import  './Css/Sign.css'
import Login from './Login';
import Footer from '../Footer';
const Sign = () => {
  const [inputData, setInputData] = useState({});
const [emailerr, setEmailErr] = useState('');

const  Handle = e => {
  e.preventDefault();
  console.log(inputData);
    if(!inputData.name || !inputData.email || !inputData.password){
       
         window.alert('please make sure you are enter data first')
          return false;
       }
        else {
  axios.get(`http://localhost:2000/check/email/${inputData.email}`)
    .then(response => {
      if (response.data.message === 'Email already exists') {
        window.alert('Choose another email');
        setEmailErr('Email already exists');
      } else if (response.data.message === 'Email is available') {
        axios.post('http://localhost:2000/sign/data', {
          name: inputData.name,
          email: inputData.email,
          password: inputData.password
        })
        .then(response => {
          if (response.data.message === 'Created Account') {
            window.alert('Account created');
            setEmailErr('Account created');
             window.location.href='/Login'
          }
        })
        .catch(err => {
          console.error(err);
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
};
}
  
  const ChangHandle = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  
  return (
    <>
      <div className='sign-form'>
      
          <form className='submit-form' onSubmit={Handle}>
             <img src='https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png-300x300.png' />
              <input type="text" name="name"  onChange={ChangHandle} />
              <input type="email" name="email" onChange={ChangHandle}/>
              <input type="password" name="password" onChange={ChangHandle}/>
              <input type="submit" value="submit" />
          </form>
      </div>
       <Footer/>
    </>
  )
}

export default Sign;
