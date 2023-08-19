import React, { useState } from 'react'
 const AddHandler=(e)=>{
     e.preventDefault();
      
 }
const Deleting_ = () => {
     const [data,setdata]=useState(['item1','item2','item3']);
      const DeleteData=(index)=>{
        const newData=[...data];
         newData.splice(index,1);
          setdata(newData);
      }
  return (
 <>
  <form onsubmit={AddHandler}>
     <input type={'text'} name={'text'} value="enter Data"/>
      <input type={'submit'}>Submit</input>
  </form>
 <ul>
      {data.map((item,index)=>(
         <li key={item}>
              {item}
                <button onClick={()=>{DeleteData(index)}}> Delete </button>
         </li>
      ))}
     </ul> 
 </>
  )
}

export default Deleting_