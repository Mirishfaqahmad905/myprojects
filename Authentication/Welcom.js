import React, { useEffect } from 'react'
import './welcom.css';
const Welcom = (props) => {

    useEffect(()=>{
      const currentUrl=window.location.href;
   if(window.history){
       if(currentUrl=="http://localhost:3000/Signup"){
          window.alert('welcom');
       }
       else {
         window.history.back();
       }
   }
    },[])
   const {name,emsil}=props;
  return (
    <div className='welcom '>Welcom {name},{emsil}</div>
  )
}

export default Welcom