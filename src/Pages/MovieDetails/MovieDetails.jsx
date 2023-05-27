
import { useEffect, useState} from 'react';

import { Link,Outlet,useParams,useLocation} from 'react-router-dom';
import Loader from 'components/Loader/loader';
import { fetchMovieById } from '../../FetchApi/FetchApi';
// import  BackLink  from 'components/BackLink/BackLink';
// import { Suspense } from 'react';
import css from '../MovieDetails/MovieDetails.module.css'



   const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
     const location = useLocation();
    //  const backLink = location.state?.from ?? '/';
    
     const backLink= location.state?.from || '/';
     
    useEffect(() => {
      console.log('Fetching  id:', movieId);
      fetchMovieById(movieId).then(data => {
          // const data = response.data;
          setMovie(data);
        })
        .catch((error) => {
          console.log(error);
         new Error(error)
        });
    }, [movieId]);
     
 
    if (!movie) {
      return <p>{<Loader/>}</p>;
    }
     const { title, vote_average, release_date, genres, poster_path } = movie;
    
   
    return (
    <>
        <Link className={css.backLink} to={backLink}>
        Go Back
      </Link>
        <div className={css.movie}>
          <img  className={css.poster} src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster"
          />
        <div className={css.movieInfo}>
          <div className={css.mainInfo}>
            <h2 className={css.mainTitle}>
              {title} ({new Date(release_date).getFullYear()})
            </h2>
            <p className={css.mainText}>User Score: {Math.round(vote_average * 10)} %</p>
            <h3 className={css.mainTitle}>Overview</h3>
            <p className={css.mainText}>{movie.overview}</p>
            <h3 className={css.mainTitle}>Genres</h3>
            {genres && movie.genres.map(genre => genre.name).join(', ')}
          </div>
          <div  className={css.extraInfo}>
            <h3 className={css.mainTitle}>Additional information</h3>
            <ul className={css.list}>
              <li>
                <Link  className={css.btn}
                  to="cast"
                  state={{ from: backLink }} >
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.btn}
                  to="reviews"
                  state={{ from: backLink }}
                  
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
    