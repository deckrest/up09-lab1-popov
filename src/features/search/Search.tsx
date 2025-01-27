import React from 'react';
import { useSearch } from '../../shared/hooks/useSearch';
import MovieInput from '../../components/input/Input';
import MovieButton from '../../components/button/Button';
import MovieCard from '../../components/card/MovieCard';
import './search.css';
import FavoriteListButton from '../../components/button/FavoriteListButton';

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm, movies, handleSearch } = useSearch();

  return (
    <div>
        <div className="searchCont">
          <MovieInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MovieButton onClick={handleSearch} />
          <FavoriteListButton />
        </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <MovieCard
            id={movie.imdbID}
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
