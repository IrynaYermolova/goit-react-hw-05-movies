
// import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
// import { Home } from 'Pages/Home/Home';
// import { Movies } from 'Pages/Movies/Movies';
import { Route, Routes,Navigate} from 'react-router-dom';
// import Cast from './Cast/Cast';
// import Header from './Heder/Heder';
// import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Header = lazy(() => import('./Header/Header'))
const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));


export const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={< Header />}>
          <Route index element={< Home />} />
           <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        
      <Route path="*" element={<Home />} />
      </Routes> */}
       <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>
  ) 


};
