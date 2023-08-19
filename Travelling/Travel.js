 import React, { useState } from 'react'
 
 const Travel = () => {
   const [input,setinput]=useState([]);
   const [item,setitem]=useState([]);
    const ChHandler=(e)=>{
       setinput(e.target.value);
         
    }
     const ClickButton=(e)=>{
       e.preventDefault();
       setitem([...item,input]);
        setinput('');
     }       
   return (
     <div>
        <input type={'text'} onChange={ChHandler} />
         <button onClick={ClickButton}>Click</button>
      <ul>
         {item.map((item,index)=>(
           <li key={index}>{item}</li>
         ))}
      </ul>
     </div>
     
   )
 }
 
 export default Travel