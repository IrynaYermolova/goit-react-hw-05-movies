

import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReviews}  from '../../FetchApi/FetchApi';
import css from '../Reviews/Reviews.module.css'


const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
     
  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId).then(data => setMovieReviews(data));
  }, [movieId]);
     
  return (
    <div className={css.container}>
      <p className={css.mainPar}>Reviews</p>
      <ul>
        {movieReviews.length !== 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <p>
                <span className={css.mainPar}>Author: </span>
                {review.author}
              </p>
              <p className={css.textAutor}> {review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;