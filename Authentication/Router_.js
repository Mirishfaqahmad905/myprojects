import React from 'react'
import { BrowserRouter,Route, Link, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Table from './Table'
import Welcom from './Welcom'
import Update from './Update'
 
const Router_ = () => {
  return (
   <>
 <BrowserRouter>
 <Header/>
 {/* <Table/> */}


   <Routes>

      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Welcom' element={<Welcom/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/table/:id' element={<Table/>}></Route>
       <Route path='/Update/:id' element={<Update/>}></Route>
   </Routes>
 
   <Routes>

    
   </Routes>

  </BrowserRouter>
  <Footer/>
   </>
  )
}

export default Router_