import { Route, BrowserRouter ,Routes, BrowserRouter } from 'react-router-dom';
import React from 'react'
import Home from './Router/Home';
import About from './Router/About';
import Contact from './Router/Contact';
 
 const Routes = () => {
   return (
    <>
      <BrowserRouter>
                <Routes>
                      <Route path='/home'  component={Home}/>
                      <Route path='/about'  component={About}/>
                      <Route path='/contact'  component={Contact}/>
                </Routes>
       </BrowserRouter>
    
    </>
   )
 }
 
 export default Routes