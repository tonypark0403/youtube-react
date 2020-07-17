import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ routes }) => (
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
        <li>
          <Link to="/join">Join</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default Header;
