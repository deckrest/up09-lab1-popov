// src/features/search/Search.tsx
import React from 'react';
import { useSearch } from './hooks/useSearch';
import MovieInput from '../../components/input/Input';
import MovieButton from '../../components/button/Button';
import MovieCard from '../../components/card/MovieCard';

const Search: React.FC = () => {
  const { searchTerm, setSearchTerm, movies, handleSearch } = useSearch();

  return (
    <div>
      <MovieInput 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <MovieButton onClick={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <MovieCard 
            key={movie.imdbID} 
            title={movie.Title} 
            year={movie.Year} 
            poster={movie.Poster} 
          />
        ))}
      </div>
    </div>
  );
};

export default Search;