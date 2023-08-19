import React from 'react'
 import Mystyle from 'styled-components';
const Project = () => {
  const Projects=Mystyle.div
  `
   margin-top:200px;
   display:flex;
 flex-wrap:wrap;
  justify-content:space-around;
   .todo{
     background-color:black;
      width:300px;
       border-radious:23px;
       text-align:center;
      color:white;
       font-size:23px;
       padding:20px;
   }
    button{
         padding:10px;
          width:300px;
          color:black;
           border:none;
            background-color:#333;;
            padding:20px;       
           
    };
     .weather{
        background-color:#333;
        width:300px;
         border-radious:23px;
         text-align:center;
        color:white;
        padding:20px;
         font-size:23px;
          transition: linear 0.3s;
     }
     .weather:hover{
         background-color:yellow;
        
          color:brown;
     }
    
  `;
    return (
 <div>
      <Projects>
           <div className='todo'>
             <div className='title'>
                 <h2>title </h2>
                  <div className='img'>
                     <img src=''/>
                     <button>buton </button>
                  </div>
             </div>
           </div>
           <div className='weather'>
             <div className='w-title'>
                 <h2>title </h2>
                  <div className='w-img'>
                     <img src=''/>
                     <button>buton </button>
                  </div>
             </div>
           </div>
 </Projects>
 </div>
  )
}

export default Project