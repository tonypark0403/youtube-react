import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="header__column">
      <i className="fab fa-youtube"></i>
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

export default Header;
