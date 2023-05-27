import axios from 'axios';

const API_KEY = 'e7147536b3f6e7e0e6ccf2ca27080ce3';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: API_KEY },
});
export const fetchPopularMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};
export const fetchSearchMovie = async query => {
  const { data } = await instance.get('/search/movie', {
    params: { query: query },
  });
  return data;
};
export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
export const fetchMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};
export const fetchMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
