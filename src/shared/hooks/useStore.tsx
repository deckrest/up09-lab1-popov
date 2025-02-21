import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Movie {
  id: string;
  title: string; // Название фильма
  year: string; // Год выпуска
  poster: string; // Постер (если есть)
  liked: boolean;
}

interface Store {
  movies: Movie[];

  // TODO: переписать, чтобы параметром выступал весь объект Movie
  toggleLike: (id: string, title: string, year: string) => void; // Добавьте title и year
}

// Использовать middleware у zustand, который позволяет хранить весь стейт в LocalStorage (persist)
const useStore = create<Store>()(
  persist( 
    (set) => ({
    movies: [],
    // movies: JSON.parse(localStorage.getItem('movies') || '[]') as Movie[],
    toggleLike: (id: string, title: string, year: string) =>
      set((state: Store) => {
        const movieExists = state.movies.find(movie => movie.id === id);

        let updatedMovies;
        if (movieExists) {
          // Если фильм уже есть, переключаем лайк
          updatedMovies = state.movies.map((movie) =>
            movie.id === id ? { ...movie, liked: !movie.liked } : movie
          );
        } else {
          // Если фильма нет, добавляем его в список
          updatedMovies = [
            ...state.movies,
            { id, title, year, poster: '', liked: true }, // Сохраняем title и year
          ];
        }

        // localStorage.setItem('movies', JSON.stringify(updatedMovies));
        return { movies: updatedMovies };
      }),
    }),
    {
      name: 'movies-storage'
    }
));

export default useStore;