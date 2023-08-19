import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Header.css'
const Header = () => {
  return (
   <div>
     <nav>
         <ul>
             <li>
                 <Link to={'./Login'} >Login</Link>
             </li>
             <li>
                 <Link to={'./Signup'} >Signup</Link>
             </li>
             <li>
                 <Link to={'./Welcom'}    >Welcom</Link>
             </li>
            <li>
                 <Link to={'./table/:id'}> Show data </Link>
            </li>
            <li>
                 <Link to={'./Update/:id'}> Update </Link>
            </li>
           
         </ul>
     </nav>

   </div>
  )
}

export default Header