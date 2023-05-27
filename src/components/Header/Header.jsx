
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import css from '../Header/Header.module.css'

 const Header = () => {

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link className={css.headerLink} to="/">Home</Link>
          <Link className={css.headerLink} to="/movies">Movies</Link>
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