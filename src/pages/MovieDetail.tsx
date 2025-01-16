import React from 'react';
import ImageNotFound from '../assets/notFound.png'
import {Link} from 'react-router-dom';

interface MovieDetailProps {
  id: number; // Add an id prop for the movie
  title: string;
  year: string;
  description: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ title, year, description }) => {

  return (
    <div className="movie-detail">
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <img src={ImageNotFound} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default MovieDetail;
