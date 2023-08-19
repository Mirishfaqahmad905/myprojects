import React from 'react'

const Condition_rendring = () => {
 const IsLoggedIn=false;
  
  return (
     <>
   <div>
     {IsLoggedIn ? (Loging):(<Logout/>)}

   </div>
 
      </>
  )
}
   function Loging(){
     return(
         <>
          <p> Welcom to Login page </p>
          </>
     )
   }
    
    function Logout(){
         return(
             <>
              <h2> you are log out </h2>
             </>
         )
    }

export default Condition_rendring