import React from 'react'
 import Home from './Component/Home'
  import Scholarship from './Component/Scholarship'
   import Courses from './Component/Course'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Linking from './Linking';
import Login from './Component/Login';
import Sign from './Component/Sign';
import Contact from './Component/Contact';
import Resources from './Component/Resources';
import Russia from './Scholarships/Russia';
import Project from './Component/Project';
const Routing = () => {
  return (
    <BrowserRouter>
  <div>
          <Linking/>
    <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Course' element={<Courses/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Sign' element={<Sign/>}></Route>
          <Route path='/Russia' element={<Russia/>}></Route>
          <Route  path='/Contact' element={<Contact/>}></Route>
          <Route path='/Resourses' element={<Resources/>}></Route>
          <Route path='/Russia' element={<Russia/>}/>
          <Route path='/Project' element={<Project/>}/>
    </Routes>    
    </div>
    </BrowserRouter>
  )
}

export default Routing