import { useSearch } from '../../shared/hooks/useSearch';
import MovieInput from '../../components/input/Input';
import MovieButton from '../../components/button/Button';
import './Search.css';
import FavoriteListButton from '../../components/button/FavoriteListButton';
import Feed from '../../components/Feed/Feed';

const Search = () => {
  const { searchTerm, setSearchTerm, movies, handleSearch } = useSearch();

  return (
    <div>
        <div className="searchCont">
          <MovieInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MovieButton onClick={handleSearch} />
          <FavoriteListButton />
        </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Feed />
      </div>
    </div>
  );
};

export default Search;
