import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ isAuth, id = '123' }) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__column">
          <Link to="/">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
        <div className="header__column">
          <form action="/videos/search" method="get">
            <input type="text" placeholder="Search by term..." name="term" />
          </form>
        </div>
        <div className="header__column">
          <ul>
            {isAuth ? (
              <>
                <li>
                  <Link to="/videos/upload" className="header__item">
                    Upload
                  </Link>
                </li>
                <li>
                  <Link to={`/users/${id}`} className="header__item">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={`/logout`} className="header__item">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/join" className="header__item">
                    Join
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="header__item">
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

export default Header;
