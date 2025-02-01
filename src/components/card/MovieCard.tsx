import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import ImageNotFound from '../../assets/notFound.png';
import HeartButton from '../button/HeartButton';
import { Movie } from '../../entity/movie/movie';

const MovieCard: React.FC<Movie> = ({ imdbID, Title, Year }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${imdbID}`}>
        <img src={ImageNotFound} alt={Title} />
        <h3>{Title}</h3>
        <p>{Year}</p>
      </Link>
      <HeartButton id={imdbID} title={Title} year={Year} />
    </div>
  );
};

export default MovieCard;