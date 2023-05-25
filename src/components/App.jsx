
// import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
// import { Home } from 'Pages/Home/Home';
// import { Movies } from 'Pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
// import Cast from './Cast/Cast';
// import Header from './Heder/Heder';
// import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Header = lazy(() => import('../components/Heder/Heder'))
const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={< Header />}>
          <Route index element={< Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}/>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
          <Route path="/movies" element={< Movies />}></Route>
          </Route>
      </Routes>
    </>
  ) 


};
