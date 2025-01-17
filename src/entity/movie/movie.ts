// src/types/movie.ts
export interface Movie {
    id: number,
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Description: string;
  }
  
  export interface MovieSearchResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string; // Ошибка может быть не определена
  }