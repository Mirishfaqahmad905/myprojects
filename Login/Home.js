import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
const Home = () => {
  return (
      <div>
        <nav>
             <ul>
                 <li> <Link to='/home'>Home</Link> </li>
                 <li> <Link to='/About'>About</Link> </li>
                 <li> <Link to='/User'>user</Link> </li>
                 <li> <Link to='/Dashboard'>Welcom</Link> </li>
             </ul>
        </nav>
      </div>
  )
}

export default Home