import React from 'react';
import useStore from '../shared/hooks/useStore'; // Укажите правильный путь
import MovieCard from '../components/card/MovieCard';

const FavoritesPage: React.FC = () => {
  const { movies } = useStore();
  const favoriteMovies = movies.filter(movie => movie.liked);

  return (
    <div>
      <h1>Избранные фильмы</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favoriteMovies.map(movie => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title} // Передаем название фильма
            year={movie.year} // Передаем год выпуска
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;