import React from 'react';
import PropTypes from 'prop-types';
import Header from '../partials/header/header';
import Footer from '../partials/footer';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;
