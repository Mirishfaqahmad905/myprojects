import React from 'react'
import { Link } from 'react-router-dom'
 import './Component/Css/Linking.css';

const Linking = () => {
  return (
    <div className='main-dev'>
       <header className='Linking-header'>
       <nav className='linking-nav'>
       <ul className='nav-linking'>
  <li id='linking-id'> <Link to="/Home">Home</Link> </li> 
  <li id='linking-id'> <Link to="/Course">Courses</Link> </li> 
  <li id='linking-id'> <Link to="/Login">Login</Link> </li> 
  <li id='linking-id'> <Link to="/Sign">Sign</Link> </li> 
  <li id='linking-id'> <Link to="/Resourses">Resourses  </Link> </li> 
  <li id='linking-id'> <Link to="/Contact">Contact </Link> </li> 
  <li id='linking-id'> <Link to="/Russia">Scholarship </Link> </li>
  <li id='linking-id'> <Link to="/Project">Mini Project </Link> </li>
</ul>
          </nav>
       </header>
    </div>
  )
}

export default Linking