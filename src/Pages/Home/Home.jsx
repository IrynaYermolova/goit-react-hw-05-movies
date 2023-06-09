import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../FetchApi/FetchApi';
import MoviesList from 'components/MoviesList/MoviesList';
import css from '../Home/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchLoad();
  }, []);

  const fetchLoad = () => {
    fetchPopularMovies()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => new Error(error));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>-Trending Today-</h1>
      <MoviesList movies={movies} />
      <Outlet />
    </div>
  );
};

export default Home;
