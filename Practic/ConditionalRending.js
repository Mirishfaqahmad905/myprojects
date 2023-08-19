import React from 'react'

const ConditionalRending = () => {
     const  Logged=false;
      let message;
       if(Logged){
         message=<Comp1/>;
       }
        else {
             message=<Comp2/>;
        }
      
  return (
   <>
       <p> {message}</p>
   </>
  )
}

export default ConditionalRending;
 function Comp1(){
     return(
         <>
           <h2>Component 1 </h2>
          </>
     )
 }
 function Comp2(){
    return(
        <>
          <h2>Component 2</h2>
         </>
    )
}