import MovieCard from '../../components/card/MovieCard';
import {useSearch} from '../../shared/hooks/useSearch';

const Feed = () => {
    const { movies } = useSearch();
    return (
        <>
            {movies.map(movie => (
            <MovieCard
                {...movie}
                key={movie.imdbID}
            />
            ))}
        </>
    );
};

export default Feed;