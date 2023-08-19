import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Result from '../Result';

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from '../Edit';





const App = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const onsubmitDefault = (even) => {
    even.preventDefault();
    console.log(name, email, pass);
    fetch('http://localhost:2000/send/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, pass }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));




  };
   
   

 



  const handlename = (even) => {
    setname(even.target.value);
  };
  const passhandler = (even) => {
    setpass(even.target.value);
  }
  const handleemail = (even) => {
    setemail(even.target.value);

  }
  return (
    <>
     <BrowserRouter>
 <Result/>
      <form onSubmit={onsubmitDefault}>
        <input type={'text'} name="name" onChange={handlename} placeholder='enter your name' />
        <input type={'email'} name="email" placeholder='enter you email' onChange={handleemail} />
        <input type={'password'} name="password" placeholder='enter your password' onChange={passhandler} />
        <input type={'submit'} name="submit" value={'submit'} />
      </form>
  {/* < Display/> */}
       
          <Routes>
             <Route path='/Edit/:id' element={<Edit/>}> </Route>
          
          </Routes>
          
         </BrowserRouter>

    </>
  )
}



// export default Display;

export default App;