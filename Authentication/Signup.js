import axios from 'axios';
import React, { useState} from 'react'
import './Signup.css'
const Signup = () => {
const [email,setemail]=useState();
  
     const [data,setData]=useState(); 
      const [exist,setExist]=useState();
    const onSubmitHandler=(e) => {
          e.preventDefault();
  const email=data.email;
     axios.get(`http://localhost:2000/get/data/${email}`).then((res) => {
       console.log(res.data);
       if (res.data.message === 'The email already exists') {
         setExist(data.email);
         window.alert('Please choose another email.');
       } else {
         axios.post('http://localhost:2000/send/data', {
           name: data.name,
           email: data.email,
           password: data.password
         }).then((res) => {
           console.log(res.data)
           if (res.data.message === 'data entered') {
             window.alert('Success! Your account has been created.');
             window.location.href = "./Welcom";
           }
       
         });
       }
     });

 }

          
      const onChangeHandler=(e)=>{
          setData({...data,[e.target.name]:e.target.value});
      }
  return (
   <div>
     <form className='form' onSubmit={onSubmitHandler}  >
         <input type={'text'} name="name"  onChange={onChangeHandler} placeholder='Enter you name'/>
          <input type={'email'} name="email" onChange={onChangeHandler}  placeholder='Enter your email'/>
           <input type={'password'}  name="password" onChange={onChangeHandler}  placeholder='Enter your email '/>
            <input type={'submit'}  value="create-account"/>
 
     </form>
 

  
   </div>
  
   
  )
}

export default Signup;
