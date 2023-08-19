import React, { useEffect, useState } from 'react';

const Series = ({ tvId, seasonNumber }) => {
  const [seriesData, setSeriesData] = useState(null);

  useEffect(() => {
    const fetchSeasonData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=YOUR_API_KEY&language=en-US`);
        const data = await response.json();
        setSeriesData(data);
        console.log(data);
      } catch (err) {
        console.error('Error during fetching data from API:', err);
      }
    };

    fetchSeasonData();
  }, [tvId, seasonNumber]);

  if (!seriesData) {
    return <div>Loading data...</div>;
  }

  const { name, overview, poster_path } = seriesData;

  // Render the season data with poster image
  return (
    <>
      <h2>{name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
      <p>{overview}</p>
      {/* Display other season data as needed */}
    </>
  );
};

export default Series;
