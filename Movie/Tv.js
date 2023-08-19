import React, { useState, useEffect } from 'react';
import './Tvshow.css'; // Import the CSS file for styling

const Tv = ({ tvId }) => {
  const [tvShow, setTVShow] = useState(null);
  const apikey = '953e3fa8a3ee3d40f59a97937198bdaf';
  useEffect(() => {
    const fetchTVShow = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=YOUR_API_KEY&language=en-US`);
        const data = await response.json();
        setTVShow(data);
      } catch (error) {
        console.error('Error fetching TV show:', error);
      }
    };

    fetchTVShow();
  }, [tvId]);

  if (!tvShow) {
    return <div>Loading TV show details...</div>;
  }

  return (
    <div className="tv-show-container">
      <div className="tv-show-poster">
        <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} alt={tvShow.name} />
      </div>
      <div className="tv-show-details">
        <h1 className="tv-show-title">{tvShow.name}</h1>
        <p className="tv-show-overview">{tvShow.overview}</p>
        <div className="tv-show-genres">
          <h2 className="tv-show-genres-title">Genres:</h2>
          <ul className="tv-show-genres-list">
            {tvShow.genres.map(genre => (
              <li key={genre.id} className="tv-show-genre">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="tv-show-credits">
          <h2 className="tv-show-credits-title">Credits:</h2>
          <ul className="tv-show-credits-list">
            <li className="tv-show-credit">
              <span className="tv-show-credit-title">Created by:</span>
              <span className="tv-show-credit-value">
                {tvShow.created_by.map(creator => creator.name).join(', ')}
              </span>
            </li>
            <li className="tv-show-credit">
              <span className="tv-show-credit-title">First air date:</span>
              <span className="tv-show-credit-value">{tvShow.first_air_date}</span>
            </li>
            <li className="tv-show-credit">
              <span className="tv-show-credit-title">Last air date:</span>
              <span className="tv-show-credit-value">{tvShow.last_air_date}</span>
            </li>
            <li className="tv-show-credit">
              <span className="tv-show-credit-title">Number of seasons:</span>
              <span className="tv-show-credit-value">{tvShow.number_of_seasons}</span>
            </li>
            <li className="tv-show-credit">
              <span className="tv-show-credit-title">Number of episodes:</span>
              <span className="tv-show-credit-value">{tvShow.number_of_episodes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tv;
