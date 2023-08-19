import React, { useState } from 'react';
import './Nav.css';
import styled from 'styled-components';

const Portfolio = () => {
   const [comment,setComment]=useState();
   const [name,setNaming]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  const StyleComponent2 = styled.nav`
    background-color: rgb(3, 3, 68);
    margin-top:0px;
    color: white;
    .nav {
      margin-top:0px;
      background-color: rgb(3, 3, 68);
    }
    .nav-ul{
      margin-top:0px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 10px;
    }
    .nav-ul li {
      list-style-type: none;
    }
  `;

  const handleUserClick = () => {
    const userSection = document.getElementById("user");
    userSection.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleAboutClick = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
   const Content=()=>{
     
   }

  return (
    <div className='body-whole'>
      <StyleComponent2>
        <ul className='nav-ul'>
          <li><button onClick={handleAboutClick}>Myskills</button></li>
          <li><button onClick={Content}>About</button></li>
          <li><button onClick={ handleUserClick}>User</button></li>
        </ul>
      </StyleComponent2>
      <div className='body-container'>
        <div className='left-block'>
          <h2> I am a Web Developer</h2>
          <p>Check out my work</p>
          <button className='btn1' style={{ border: 'none', width: 200, padding: 10 }} onClick={handleAboutClick} >Join Me  </button>
          <button className='btn2' style={{ border: 'none', width: '200', padding: 10 }} onClick={handleAboutClick}>Hire Me </button>
        </div>
        <div id='users' className='right-block'>
          <h2>My Context </h2>
          <p>
            This website belongs to my portfolio and I am a web developer. Here, I write about the most advanced topics in web development.
          </p>
          <img src='./Images/png2.png' width={500} alt="Portfolio" />
        </div>
      </div>
      <div className='slid-card'>
        <div className='card-one'>
          <h2> My Works  </h2>
          <img src="./Images/img.png" width={200} alt="Animation" />

        </div>
        <div className='card-two'>
          <h2> My Works  </h2>
          <img src='./Images/img2.png' width={130} alt="Animation" />
        </div>
        <div className='card-three'>
          <h2> My Works  </h2>
          <img src='./Images/img3.png' width={120} alt="Animation" />
        </div>
      </div>
      <div className='skill-container'>
        <div id='skills' className="skills">
          <div className="skill">
            <p>HTML</p>
            <div className="bar html"></div>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="bar css"></div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="bar js"></div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="bar react"></div>
          </div>
      

  </div>
  <div class="skill">
    <p>express</p>
    <div class="bar express"></div>
  </div>
  </div>
 <div className='contact-form'>
  <form onSubmit={handleSubmit}>
     <input type={'text'} name={'name'} placeholder="enter your name "     onChange={e=>{setNaming(e.target.value)}}/>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
      />
       
      <button type="submit">Submit</button>
    </form>
 </div>
     <footer>
        <h2>@No CopyWright </h2>
     </footer>

 </div>


  );
};

export default Portfolio;
