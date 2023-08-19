import React from 'react'
 import styled from 'styled-components';
 
const StyleComponents = () => {
  const Nav =styled.div`
   color:black;
    background-color:yellow;
     display:flex;
      justify-content:center;
       padding:23px;
        .nav{
             margin:23px;
         color:black;
       font-size:23px;
        
            }
             
         
  `;
   const MYbody=styled.div`
     
      display:flex;
       justify-content:space-around;
       align-item:center;
        flex-wrap:wrap;
      .left-container{
          color:black;;
           background-color:red;
          padding:50px;
            
            
      };
       .right-container{
        color:white;
        padding:50px;
       }

    `;
     const Carflex=styled.div`
      display:flex;
      flex-wrap:wrap;
       justify-content:space-around;
     `
    return (
    <div>
          <Nav>
              <a className='nav' href='https://www.google.com'>Home </a>
              <a className='nav' href='#'>About </a>
              <a className='nav' href='#'>Users  </a>
             </Nav>  
              <MYbody>
              
                     <div className='left-container'>
                          <p>hello this is mir </p>
                     </div>
                      <div className='right-container'>
                          <h2>hello how are your iam khan
                             helo my namekhan iand i also the
                            
                            
                             </h2>
                      </div>
         
                 </MYbody>  
 <Carflex>
 <Card  title="card  four "/>
     <Card  title="card three "/>
     <Card  title="Card two"/>
 </Carflex>
 <Footer/>
    </div> 
  )
}
 function Card({title}){
      const CardWrapper=styled.div`
        background-color:#333;
         text-align:center;
         color:white;
          border:1px solid #cc;
          padding:20px;
          border-radius:10px;
           width:300px;
            margin-top:123px;
      ;
      .card p {
        font-size:23px;
          font-family:italic;
  }  `
      ;
       const CardTitle=styled.div`
        color:white;
        
       `;
        const CardButton= styled.div`
           text-align:center;
                    
        `;
         const Btn=styled.div`
           button{
             font-size:23px;
              width:100px;
               padding:10px;
                cursor:pointer;
                 transition: linear 0.1s all;
         
           }button:hover{
             background-color:black;
              color:white;
               
           }
         `;
      return (
         <div>
  <CardWrapper>
              <CardTitle>{title}</CardTitle>
               <CardButton >
                 <img src='./logo192.png'/>
               </CardButton>
            <div className='card'>
                  <p>card is here 
                this is the card description here are goes to description 


                  </p>
                   <Btn>
                     <button>Btn</button>
                   </Btn>
            </div>
     
          </CardWrapper>
     
         </div>
      )
 }
  
  const Footer=()=>{
     const Foter=styled.div`
       color:black;
        background-color:#333;
        font-family:yellow;
         .footer{
           color:brown;
            color:white;
             background-color:brown;
                text-align:center;
               margin-top:100px;
            
         }
          .footer p{
             textalign:center;
          }
          
     ` 
    return(
       <div>
         <Foter>
           <div className='footer'>
              <p>Footer are this one {new Date().getFullYear()}</p>
               
           </div>
         </Foter>
       </div>
     )
  }
export default StyleComponents