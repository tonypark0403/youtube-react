import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated = true, id = '123' }) => {
  return (
    <div className="header">
      <div className="header__column">
        <i className="fab fa-youtube"></i>
      </div>
      <div className="header__column">
        <form action="/videos/search" method="get">
          <input type="text" placeholder="Search by term..." name="term" />
        </form>
      </div>
      <div className="header__column">
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/videos/upload">Upload</Link>
              </li>
              <li>
                <Link to={`/users/${id}`}>Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/join">Join</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  id: PropTypes.string,
};

export default Header;
