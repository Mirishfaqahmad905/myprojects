import React, { useState, useEffect } from 'react';
import './Top.css';

const Top = () => {
  const [moviePosters, setMoviePosters] = useState([]);

  const apikey = '953e3fa8a3ee3d40f59a97937198bdaf';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        const movies = data.results;
        let posters = [];

        // For each movie, fetch its images and add them to posters array
        movies.forEach(movie => {
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${apikey}`)
            .then(response => response.json())
            .then(data => {
              const moviePosters = data.posters;
              moviePosters.forEach(poster => {
                posters.push({
                  movieId: movie.id,
                  posterPath: poster.file_path
                });
              });

              // Update state with the updated posters array
              setMoviePosters(posters);
            });
        });
      });
  }, [apikey]);

  return (
 <>
 
 

<div className='header'>
    <img className='movie-banner'  src='https://cloudimages.broadwayworld.com/columnpiccloud/1250-0d895cb057469da717790745250606fe.jpg'/>
</div>
    <div className="movie-posters-container">
      {moviePosters.map((poster) => (
        <div className="movie-poster" key={''}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster.posterPath}`} alt={`Poster for movie ${poster.movieId}`} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Top;
