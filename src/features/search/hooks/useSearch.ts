// src/features/search/hooks/useSearch.ts
import { useState } from 'react';
import { fetchMovies } from '../../../api/omdbApi.ts';
import { Movie, MovieSearchResponse } from '../../../types/movie.ts'

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async () => {
    try {
      const data: MovieSearchResponse = await fetchMovies(searchTerm);
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        console.error(data.Error);
        setMovies([]); // Очистка списка фильмов в случае ошибки
      }
    } catch (error) {
      console.error("Ошибка при поиске фильмов:", error);
    }
  };

  return { searchTerm, setSearchTerm, movies, handleSearch };
};