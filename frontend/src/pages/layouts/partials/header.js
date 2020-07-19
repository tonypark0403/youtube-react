import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ routes, isAuthenticated = true }) => {
  return (
    <div className="header">
      <div className="header__column">
        <i className="fab fa-youtube"></i>
      </div>
      <div className="header__column">
        <form action={`${routes.videos}${routes.search}`} method="get">
          <input type="text" placeholder="Search by term..." name="term" />
        </form>
      </div>
      <div className="header__column">
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <Link to={`${routes.videos}${routes.upload}`}>Upload</Link>
              </li>
              <li>
                <Link to={routes.userDetail}>Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={routes.join}>Join</Link>
              </li>
              <li>
                <Link to={routes.login}>Log In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  routes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default Header;
