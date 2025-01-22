// MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import ImageNotFound from '../../assets/notFound.png';
import HeartButton from '../button/HeartButton';

interface MovieCardProps {
  id: string;
  title: string;
  year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, year }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={ImageNotFound} alt={title} />
        <h3>{title}</h3>
        <p>{year}</p>
      </Link>
      <HeartButton />
    </div>
  );
};

export default MovieCard;
