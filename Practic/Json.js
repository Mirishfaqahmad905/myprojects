import React, { useState,useEffect } from 'react'
import index from './index.json';
const Json = () => {
   const[data,setdata]=useState(index);
 
  
    
   return (
    
   <>
{Object.entries(data.map((d,i)=>{
     return(
         <>
               <li>{d.data.user.id}</li>
                <li>{d.data.user.name}</li>
                
         </>
     )
}))}
   
   </>
  )
}

export default Json