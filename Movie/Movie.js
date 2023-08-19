import React, { useState, useEffect } from 'react';
import './Movie.css';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const apikey = '953e3fa8a3ee3d40f59a97937198bdaf';
  const posterSize = 'w500';

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, [apikey]);

  return (
     <>
    
     <div className='header'>
            <img className='movie-banner'  src='https://i.ytimg.com/vi/wZti8QKBWPo/maxresdefault.jpg'/>
     </div>
     <div className='movie-container'>
     {movies.length ? (
       movies.map(movie => (
         <div key={movie.id} className='movie-poster'>
           {movie.poster_path && (
             <img className='img-poster' src={`https://image.tmdb.org/t/p/${posterSize}/${movie.poster_path}`} alt={movie.title} />
           )}
           <div className='movie-info'>
             <h2>{movie.title}</h2>
             <p>{movie.overview}</p>
           </div>
         </div>
       ))
     ) : (
       <p>Loading...</p>
     )}
   </div>
   </>
  );
  
};

export default Movie;
