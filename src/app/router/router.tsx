import { createBrowserRouter } from "react-router-dom";
import Search from "../../pages/Search/Search";
import MovieDetail from "../../pages/MovieDetail";
import FavoritesPage from "../../pages/FavoritesPage"; // Импортируйте новую страницу

export const router = createBrowserRouter([
    {
        index: true,
        element: <Search />,
    },
    {
        path: "movie/:imdbID",
        element: <MovieDetail />,
    },
    {
        path: "favorites", // Добавьте новый маршрут для страницы избранного
        element: <FavoritesPage />,
    },
]);