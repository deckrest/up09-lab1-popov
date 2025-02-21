// src/api/omdbApi.ts
import axios from 'axios';
import { API_KEY } from '../../config';
import { MovieSearchResponse } from '../../entity/movie/movie';

const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm: string): Promise<MovieSearchResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: searchTerm,
      r: 'json'
    }
  });
  
  return response.data as MovieSearchResponse;
};