import React from 'react';
import PropTypes from 'prop-types';
import Header from '../partials/header/header';
import Footer from '../partials/footer';

const Main = ({ isAuth, children }) => {
  return (
    <>
      <Header isAuth={isAuth} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Main.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default Main;
