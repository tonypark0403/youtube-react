import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const Header = ({ id = '123' }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then(res => res.data)
      .then(res => {
        // console.log(res.data.isAuthenticated);
        setAuthenticated(res.data.isAuthenticated);
      });
  }, []);
  return (
    <div className="header">
      <div className="header__wrapper">
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
    </div>
  );
};

Header.propTypes = {
  id: PropTypes.string,
};

export default Header;
