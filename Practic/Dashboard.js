import React from 'react';
import styled from 'styled-components';
 import Styled from  'styled-components';
const Dashboard = () => {
       const Side=Styled.div`
        display:flex;
         .dashboard-sidebar{
              display:float;
             
         }        `;
          const SideBar=styled.div`
           margin-top:23px;
           width:400px;
            text-align:center;
             list-style-type:none;
              background-color:blue;
               color:white;
                font-size:23px; 
          `;
            const Header=styled.div`
             background-color:#eee;
             padding:20px;
           
             text-align:center;
              color:green;
              font-size:23px;
              border:2px solid black; 
            `;
             const Main=styled.div`
              margin-left:100px;
               text-align:center;
                font-size:23px;
                margin-top:23px;
                 width:70rem;
                background-color:black;
                  color:white;
                     
             `;
  return (
 <div className='dashboard-container'>
      <Header>
      <div className='dashboard-header'>
         <h2>This is the sidebar</h2>
          <h3>Side Bar2 </h3>
     </div>
      </Header>
   <Side>
   <div className='dashboard-sidebar'>
         <SideBar>
         <ul>
             <li>
                 Home 
             </li>
              <li>
                Home
              </li>
               <li>
                 About
               </li>
                
         </ul>
         </SideBar>
       <Main>
       <div className='dashboard-main'>
         <h2>Main-header  </h2>
         <p>
             this  is the side bar of the dashboard 
              
         </p>
       </div>
       </Main>
      </div> 
   </Side>
       
 </div>
  )
}

export default Dashboard