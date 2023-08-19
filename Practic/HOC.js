 import React from 'react';
  const AddationCompoet=(wrapComponents)=>{
     return (props)=>{
         // here we are passing all the orignal props in react js 
          // 
        return <wrapComponents {...props} addationprops="hello addation props"/>
         
     }
  }
 
 const HOC = (props) => {
   return (
    <>
     <p>   Orignal component  </p>
     <p>{props.addationprops}</p>
    </>
   )
 }
  export default  AddationCompoet(HOC);
 
