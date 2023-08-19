import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
 import Home from './Home';
import Links from './Links';
 
  
const Routerss = () => {
  return (
   <>
     <BrowserRouter>
      <Links/>
       <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact ' element={<Contact/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routerss