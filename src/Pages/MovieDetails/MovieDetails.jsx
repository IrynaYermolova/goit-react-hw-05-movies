
import { useEffect, useState } from 'react';
// import {fetchMovieById } from '../../FetchApi/FetchApi'
import { Link,Outlet,useParams,useLocation} from 'react-router-dom';
// import Loader from 'components/Loader/loader';
import { fetchMovieById } from '../../FetchApi/FetchApi';
// import { Suspense } from 'react';

//  const { title, tagline, poster_path, overview, genres,release_date } = movie;
 

   const MovieDetails = ({ movies}) => {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();
     const location = useLocation();
     
     const { title, vote_average, release_date, genres, poster_path } = movie;
     
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
     
  //  useEffect(() => {
  //   fetchMovieById(movieId).then(data => setMovie(data));
  // }, [movieId]);
 
    // if (!movieId) {
    //   return <Loader />;
    // }
    
    
     const backLinkHref = location.state?.from ?? '/';
    return (
    <>
    <Link to={backLinkHref} >
        Go Back
      </Link>
        <div>
          <img src = {`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster"
          />
        <div >
          <div>
            <h2>
              {title} ({new Date(release_date).getFullYear()})
            </h2>
            <p>User Score: {Math.round(vote_average * 10)} %</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {genres && movie.genres.map(genre => genre.name).join(', ')}
          </div>
          <div >
            <h3>Additional information</h3>
            <ul >
              <li>
                <Link
                  to="cast"
                  state={{ from: backLinkHref }} >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: backLinkHref }}
                  
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
    