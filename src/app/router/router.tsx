import { createBrowserRouter } from "react-router-dom";
import Search from "../../features/search/Search";
import MovieDetail from "../../pages/MovieDetail";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Search />
    },
    {
        path: "movie/:imdbID",
        element: <MovieDetail />
    }
]);
