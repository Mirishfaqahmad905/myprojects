import React from 'react'
import  {Routes, Router, BrowserRouter, Route, Link} from 'react-router-dom';
import Movie from './Movie';
import Home from './Home';
import Top from './Top';
import Movie_Lineker from './Movie_Linker';
import Searies from './Searies'

// import Tv from './TV';
// import TVShow from './TvShow';

const Movie_Route = () => {
  return (
    <div>
            <BrowserRouter>
             <Movie_Lineker/>
            <Routes>
            <Route path='./Home' element={<Home/>}></Route>
            <Route path='/Top' element={<Top/>}> </Route>
              {/* <Route path='/TV' element={<Tv/>}></Route> */}
             <Route path='/Movie' element={<Movie/>}> </Route>
            {/* <Route path='/TvShow' element={<TvShow/>}></Route> */}
              <Route path='/Movie' element={<Movie/>}> </Route>
               <Route path='/Searies' element={<Searies/>}></Route>
             </Routes>
             </BrowserRouter>
    </div>
  )
}

export default Movie_Route