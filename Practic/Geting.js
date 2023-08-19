import React, { useState } from 'react'

const Geting = () => {
     
    const [data,setdata]=useState('');
     const SubmitHandler=(e)=>{
        
         e.preventDefault();
         console.log(e.target.value);
            e.target.reset();
     }
     return (
  <>
   <form onClick={SubmitHandler}>
     <input type={'text'} name="text"  placeholder='enter ' onChange={event=>{setdata(event.target.value)}}/>
     
   </form>
    <p>{data}</p>
   </>
  )
}

export default Geting