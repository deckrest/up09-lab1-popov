import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../config';
import ImageNotFound from '../assets/notFound.png';

import './MovieDetail.css';

// Данные фильма
interface Movie {
  Title: string;
  Year: string;
  Director: string;
  Actors: string;
  Plot: string;
}

const MovieDetail: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных о фильме');
        }
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          throw new Error(data.Error);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  if (!movie) return <div>Фильм не найден.</div>;

  return (
    <div className='movieDetailCont'>
      <div className='movieDetailBoxInfo'>
        <h1 className='text-center'>{movie.Title} ({movie.Year})</h1>
        <img src={ImageNotFound} alt={movie.Title} />
        <p><strong>Режиссер:</strong> {movie.Director}</p>
        <p><strong>Актеры:</strong> {movie.Actors}</p>
        <p><strong>Сюжет:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
