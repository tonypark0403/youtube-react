import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer__icon">
      <i className="fab fa-youtube"></i>
    </div>
    <span className="footer__text">
      YouTube {new Date().getFullYear()} &copy;
    </span>
  </div>
);

export default Footer;
