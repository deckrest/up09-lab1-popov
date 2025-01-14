// src/types/movie.ts
export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }
  
  export interface MovieSearchResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string; // Ошибка может быть не определена
  }