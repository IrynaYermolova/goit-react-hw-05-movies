import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


export const Header = () => {

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Suspense >
        <Outlet />
      </Suspense>
    </>
  );
}

export default Header;
// fallback={<div>Loading page...</div>}