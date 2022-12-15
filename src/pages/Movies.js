import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import { getSearchMovieList } from 'API/movie-api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getSearchMovieList(query).then(setMovie);
  }, [searchParams]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {searchParams && <MovieList movies={movies} />}
    </>
  );
};
// onSubmit = { setQuery };
export default Movies;
