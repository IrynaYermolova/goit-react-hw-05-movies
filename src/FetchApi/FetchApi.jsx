import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'; 
axios.defaults.params = {
  api_key: 'e7147536b3f6e7e0e6ccf2ca27080ce3',
    
};


export const fetchMovieById = async (movieId) => {
  console.log('Fetching yyyyy:', movieId);
    try {
        const { data } = await axios.get('/movie/{movieId}');
        return data;
    } catch (error) {
        throw error;
    }
};


// export const fetchMovieById = async movie_id => {
//   try {
//     return await axios.get(
//       `${BASE_URL}movie/${movie_id}?api_key=${KEY}&language=en-US` 
//     );
//   } catch (error) {
//     throw error;
//   }
// };
// export const fetchMovieById = async movieId => {
//   try {
//     return await axios.get(
//       `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
//     );
//   } catch (error) {
//     throw error;
//   }
// };
export const fetchPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
  
export const fetchMoviesByQuery = async (guery, page = 1) => {
    try {
        const { data } = await axios.get('/search/movie', {
            params: {
                guery,
                page,
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
};


// export const fetchMovieById = async (movie_id) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}movie/${movie_id}?api_key=${KEY}&language=en-US`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };




export const fetchMovieByCredits = async movie_id => {
    try {
        const { data } = await axios.get('/movie/{movie_id}/credits');
        return data;
    } catch (error) {
        throw error;
    }
};

export const fetchMovieByRewiews = async movie_id => {
    try {
        const { data } = await axios.get('/movie/{movie_id}/reviews');
        return data;
    } catch (error) {
        throw error;
    }
}

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const KEY = 'e7147536b3f6e7e0e6ccf2ca27080ce3';

// export const fetchPopularMovie = async () => {
//   try {
//     return await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchMovieById = async movie_id => {
//   try {
//     return await axios.get(
//       `${BASE_URL}movie/${movie_id}?api_key=${KEY}&language=en-US`
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchCast = async movie_id => {
//   try {
//     return await axios.get(
//       `${BASE_URL}movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchReviews = async movie_id => {
//   try {
//     return await axios.get(
//       `${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchMovieByQuery = async query => {
//   // console.log([])
//   try {
//     return await axios.get(
//       `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//     );
//   } catch (error) {
//     throw error;
//   }
// };

