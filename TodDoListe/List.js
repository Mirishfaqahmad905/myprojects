import React, { useState } from 'react'

const List = () => {
  const [input,setinput]=useState(); 

  const Submit=()=>{
    console.log(input)     
   }
  return (
 <>
   <form onSubmit={Submit}>
     <input type={'text'} name={'name'} onChange={(e)=>setinput(e.target.value)} />
      <input type={'email'} name='email' onChange={  (e)=>setinput(e.target.value)} />
    <input type='submit'  />
   </form>
 </>
  )
}

export default List