import Home from 'Pages/Home/Home';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';
// import Header from '../components/MainNav/MainNav';
// import Movies from 'Pages/Movies/Movies';
import Header from './MainNav/MainNav';
  



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={< Header />}>
          <Route index element={< Home />} />
          {/* <Route path="movies" element={<Movies />} /> */}
          <Route path ="/movies/:movieId" element = {<MovieDetails />} />
           </Route>
      </Routes>
    </>
  ) 


};
