import React, { useState } from 'react'

const Vdom = () => {
     const [state,setState]=useState(['item1 ','item 2','item 3','item 4']);
      const ClickHandl=()=>{
         const i=0;

          setState([...state,`item${i}`])
      }
      
  return (
    <div>
  <button onClick={ClickHandl}>Click </button>
     <ul style={{color:'green',background:'yellow',width:200,textAlign:'center',listStyleType:'none'}}>
         {state.map((item,index)=>(
             <li key={index} style={{margin:'23px'}}>
                 {item}
             </li>
         ))}
     </ul>
    </div>
  )
}

export default Vdom