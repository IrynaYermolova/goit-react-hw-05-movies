

import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReviews}  from '../../FetchApi/FetchApi';



  const Reviews = () => {
  const { movieId } = useParams();
     const [movieReviews, setMovieReviews] = useState([]);
     
  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId).then(data => setMovieReviews(data));
  }, [movieId]);
     
  return (
    <>
      <p >Reviews</p>
      <ul >
        {movieReviews.length !== 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <p >
                <span >Author: </span>
                {review.author}
              </p>
              <p> {review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;