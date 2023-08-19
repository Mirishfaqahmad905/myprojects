import React, { useState, useEffect } from "react";
import axios from 'axios';

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8c396c70&language=en-US&page=1`
      );
      setMovies(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </div>
  );
};

export default MovieCard;
