import { Link } from "react-router-dom";
import css from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ movies }) => {
  console.log({ movies })
  return (
    <div>
    <ul className={css.moviesList}>
      {movies.map(({ id, title, poster_path }) => (
        // return (
         
      
        <li className={css.moviesItem} key={id}>
          <Link className={css.linkItem} to={`/movies/${id}`}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
                
            <p className={css.text}>{title}</p>
          </Link>
        </li>
      ))}
      </ul>
      </div>
  )
}



export default MoviesList;
