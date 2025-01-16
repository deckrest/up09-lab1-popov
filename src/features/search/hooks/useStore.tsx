import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
  liked: boolean;
}

interface Store {
  movies: Movie[];
  toggleLike: (id: number) => void;
}

const useStore = create<Store>((set) => ({
  movies: JSON.parse(localStorage.getItem('movies') || '[]') as Movie[],
  toggleLike: (id: number) =>
    set((state: Store) => {
      const updatedMovies = state.movies.map((movie) =>
        movie.id === id ? { ...movie, liked: !movie.liked } : movie
      );
      localStorage.setItem('movies', JSON.stringify(updatedMovies));
      return { movies: updatedMovies };
    }),
}));

export default useStore;
