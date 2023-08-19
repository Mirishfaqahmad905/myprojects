import React, { useState } from 'react'

const Event = () => {
     const [state,setState]=useState(0);
     const [data,setdata]=useState();     
     const Incr=()=>{
             setState(state+1);
          }
           const Dec=()=>{
              setState(state-1);
           }
            const  Changhanlder=(e)=>{
                  setdata(e.target.value);
                  
            }
             console.log(data);
  return (
    <>
 
    <p>     {state}</p>
       <button onClick={Incr} >Increment   </button>
       <button onClick={Dec} >Decreament  </button>
         <h2> form data is {data}</h2>
     <input type={'text'} name='text' onChange={Changhanlder}/>
     
    </>
  )
}

export default Event