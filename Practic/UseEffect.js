import React, { useEffect, useState } from 'react'

const UseEffect = () => {
     const [data,setdata]=useState('initial data ');
  useEffect(()=>{
      setdata('updated data ');
  },[]);
      
  return (
 <>
   <h2> {data} </h2>
    <button onClick={()=>setdata('updated data ')}>Update</button>
  </>
  )
}

export default UseEffect