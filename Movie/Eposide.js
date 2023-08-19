import React, { useState, useEffect } from 'react';
import './Eposide.css';

const Eposide = ({ tvId, seasonNumber }) => {
  const [season, setSeason] = useState(null);
  const apikey = '953e3fa8a3ee3d40f59a97937198bdaf';
  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${apikey}`);
        const data = await response.json();
        setSeason(data);
      } catch (error) {
        console.error('Error fetching season:', error);
      }
    };

    fetchSeason();
  }, [tvId, seasonNumber]);

  if (!season) {
    return <div>Loading season details...</div>;
  }

  return (
    <div className="season-container">
      <div className="season-poster">
        <img src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`} alt={season.name} />
      </div>
      <div className="season-details">
        <h1 className="season-title">{season.name}</h1>
        <p className="season-overview">{season.overview}</p>
        <div className="season-episodes">
          <h2 className="season-episodes-title">Episodes:</h2>
          <ul className="season-episodes-list">
            {season.episodes.map(episode => (
              <li key={episode.id} className="season-episode">
                <span className="episode-number">Episode {episode.episode_number}:</span>
                <span className="episode-title">{episode.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="season-credits">
          <h2 className="season-credits-title">Credits:</h2>
          <ul className="season-credits-list">
            <li className="season-credit">
              <span className="season-credit-title">Air date:</span>
              <span className="season-credit-value">{season.air_date}</span>
            </li>
            <li className="season-credit">
              <span className="season-credit-title">Number of episodes:</span>
              <span className="season-credit-value">{season.episodes.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Eposide;
