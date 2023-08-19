import React, { useState, useEffect } from 'react';
// import './TVShow.css'; // Import the CSS file for styling

const TVShow = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY&language=en-US');
        const data = await response.json();
        setTVShows(data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className="tv-shows-container">
      {tvShows.length ? (
        tvShows.map(tvShow => (
          <div key={tvShow.id} className="tv-show-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} alt={tvShow.name} />
            <h2 className="tv-show-title">{tvShow.name}</h2>
            <p className="tv-show-overview">{tvShow.overview}</p>
          </div>
        ))
      ) : (
        <div>Loading TV shows...</div>
      )}
    </div>
  );
};

export default TVShow;
