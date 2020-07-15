import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return (
    <>
      <header>
        <h1>YouTube</h1>
      </header>
      <main>{children}</main>
      <footer>
        <span>&copy; YouTube</span>
      </footer>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;
