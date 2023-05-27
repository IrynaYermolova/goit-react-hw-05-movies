import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchSearchMovie } from 'FetchApi/FetchApi';
import { useSearchParams } from 'react-router-dom';


 const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieName = searchParams.get('query');
  
  useEffect(() => {
    if (!movieName) return;
   fetchSearchMovie(movieName).then(({ results }) => {
      setMovies(results);
    });
  }, [movieName]);

    const handleFormSubmit = value => {
      
    setSearchParams(value !== '' ? { query: value } : {});
   };
  
  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
export default Movies;