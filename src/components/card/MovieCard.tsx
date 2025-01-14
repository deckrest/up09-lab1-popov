import React from 'react';
import './MovieCard.css';

interface MovieCardProps {
  title: string;
  year: string;
  poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, poster }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
};

export default MovieCard;