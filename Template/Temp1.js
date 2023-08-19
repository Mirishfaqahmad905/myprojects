import React from 'react';
import './Temp1.css';
const Temp1 = () => {
  return (
 <>
  <div className='main-dev'>
     <div className='left-div'>
         <h2>iam a  <span> a full stack  devolper please contact with us   </span> </h2>
           <div className='btn-left'>
             <button className='left-dev-btn'>Join us </button>
           </div>
     </div>
      <div className='main-dev1'>
         
           <img src='/Images/man.png' width={200} height={200}/>
      </div>
      <div className='right-dev'>
  <h1>Follow Us</h1>
  <p><i className="fab fa-instagram"></i> </p>
  <p><i className="fab fa-facebook"></i> </p>
  <p><i className="fab fa-linkedin"></i> </p>
  <p><i className="fas fa-envelope"></i> </p>
</div>

  </div>
   <div className='main-sub-container'>
     <div className='left-container-port'>
        <h2>S.E.O Writting </h2>
         <img src='/Images/img2.png'  width={200} height={200}/>
          <div className='descri'>
             <h4>S.E.O</h4>
          </div>
     </div>
     <div className='main-container-port'>
        <h2>Project Managment </h2>
         <img src='/Images/img.png'  width={200} height={200}/>
          <div className='descri'>
            <h4>   We are managment  </h4>
          </div>
     </div>
     <div className='right-container-port'>
        <h2>Left Image</h2>
         <img src='/Images/img3.png'  width={200} height={200}/>
          <div className='descri'>
             <p>Hire Us for your project </p>
          </div>
     </div>
   </div>
 </>
  )
}

export default Temp1;