import React from 'react';
import useStore from '../shared/hooks/useStore';
import Feed from '../components/Feed/Feed';

const FavoritesPage: React.FC = () => {
  // const { movies } = useStore();
  // const favoriteMovies = movies.filter(movie => movie.liked);

  return (
    <div>
      <h1>Избранные фильмы</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Feed />
        {/* {favoriteMovies.map(movie => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              year={movie.year}
            />
          ))} */}
      </div>
    </div>
  );
};

export default FavoritesPage;