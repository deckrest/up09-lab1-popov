import { createBrowserRouter } from "react-router-dom";
// import MovieDetail from "../../pages/MovieDetail";
import Search from "../../features/search/Search";

import "./router.css"

export const router = createBrowserRouter([
    {
        index: true,
        element: <Search />
    },
    // {
    //     path: "movie/:id",
    //     element: <MovieDetail />
    // }
])