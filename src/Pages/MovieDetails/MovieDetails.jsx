
import { useEffect, useState } from 'react';
// import {fetchMovieById } from '../../FetchApi/FetchApi'
import { Link,useParams,useLocation} from 'react-router-dom';
import Loader from 'components/Loader/loader';
import { fetchMovieById } from '../../FetchApi/FetchApi';


export const MovieDetails = () => {
  const [movieId, setMovieId] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
      console.log('Fetching  id:', id);
    fetchMovieById(id)
      .then((response) => {
          const data = response.data;
        setMovieId(data);
      })
      .catch((error) => {
         console.log (error ); 
      });
  }, [id]);
  

//   useEffect(() => {
//   console.log('Fetching movie with id:', id);
//   Promise.resolve(fetchMovieById(id))
//     .then((response) => {
//       const data = response.data;
//       setMovieId(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, [id]);


  if (!movieId.length) {
    return <Loader />;
  }

  const getGenres = movieId.genres.map((genre) => genre.name).join(', ');
    // const { title, overwiev, genres, tagline, poster_path, release_data } = movieId;
  return (
    <div>
      <img src={'https://image.tmdb.org/t/p/w500' + movieId.poster_path} alt={movieId.title} />

      <div>
        <p>{movieId.title}</p>
        <Link to={location.state?.from ?? "/movies/"}>
          <button>Back</button>
        </Link>
      </div>

      <p>
        <strong>Overview: </strong>
        {movieId.overview}
      </p>
      {getGenres  && <p>{getGenres }</p>}

      <div>
        <Link to="cast" state={{ from: location.state?.from }}>
          <button>Cast</button>
        </Link>

        <Link to="reviews" state={{ from: location.state?.from }}>
          <button>Reviews</button>
        </Link>
      </div>
    </div>
  );
};


// {/* <Routes> */}
//                     {/* <Route path="cast" element={<Cast />} />
//         <Route path="reviews" element={<Reviews />} /> */}
//                     {/* </Routes> */}