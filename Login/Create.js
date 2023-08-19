import React, { useEffect, useState } from 'react';
import About from './About';

import axois from 'axios';
import Welcom from './Welcom';


const Create = () => {
     const [data,setdata]=useState({}); 
     const [exist,setexiste]=useState();
     const myname=data.name;
      const myemail=data.email;
       console.log(data.name,data.email);

    const SubmitHandler=(e)=>{
          e.preventDefault();
          axois.get(`http://localhost:2000/check/email/${myemail}`).then((res)=>{console.log(res.data);
             
            if(res.data.message==='The email already exists' ){
               setexiste(true);
                window.alert('plese select another email');
                 <div><Welcom name={myname}/> </div>
            }
            
        else 
         {

          axois.post('http://localhost:2000/send/data',{
            name:data.name, email:data.email,password:data.password 
           }).then((res)=>{console.log(res.data)
               window.alert('success your account are created now');
               window.location.href="./Dashboard"; 
         } );}
        })
 
     }
      
      const inputHandler=(e)=>{
         setdata({...data,[e.target.name]:e.target.value});
      }
  return (
    <div>
          <form  onSubmit={SubmitHandler}>
              <input type={'text'} name="name" onChange={inputHandler}/>
              <input type={'email'} name="email" onChange={inputHandler}/>
              <input type={'password'} name="password" onChange={inputHandler}/>
                <input type={'submit'} value="CreateAcount"/>
          </form>
    { <Welcom name={data.name} email={data.email}/> }
    </div>
    
  )
}

export default Create