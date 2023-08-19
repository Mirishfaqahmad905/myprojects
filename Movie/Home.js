import React, { useEffect, useState } from 'react';
import './MovieHeader.css'; // import CSS file for styling

const Home = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc');
        const data = await response.json();
        setMovieData(data);
        console.log(data);
      } catch (err) {
        console.error('Error during fetching data from API:', err);
      }
    };

    fetchMovieData();
  }, []);

  if (!movieData) {
    return <div>Loading data...</div>;
  }

  const { results } = movieData;
  const headerMovie = results[0]; // Assume the first movie from the API response as the header movie

  // Render the header with movie data and poster image
  return (
    <header className="movie-header">
      <div className="movie-header-container">
        <div className="movie-header-poster">
          <img src={`https://image.tmdb.org/t/p/w500${headerMovie.poster_path}`} alt={headerMovie.title} />
        </div>
        <div className="movie-header-details">
          <h1 className="movie-header-title">{headerMovie.title}</h1>
          <p className="movie-header-overview">{headerMovie.overview}</p>
          {/* Display other movie data as needed */}
        </div>
      </div>
    </header>
  );
};

export default Home;
