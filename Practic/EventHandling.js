import React, { useState } from 'react'

const EventHandling = () => {
     const [formdata,setformdata]=useState();
     const Handle=(e)=>{
         e.preventDefault();
        
     }
      const inputHandler=(e)=>{
         setformdata({...formdata,[e.target.name]:e.target.value});
      }
  return (
 <>
  <form onSubmit={Handle}>
     <input type={'text'} name="name" onChange={inputHandler}/>
     <input type={'email'} name="email" onChange={inputHandler}/>
      <input type={'submit'}  value="submit"  />
  </form>

 
 </>
  )
}

export default EventHandling    