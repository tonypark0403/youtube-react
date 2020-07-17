import React from 'react';
import PropTypes from 'prop-types';
import Header from '../partials/header';
import Footer from '../partials/footer';

const Main = ({ routes, children }) => {
  return (
    <>
      <Header routes={routes} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Main.propTypes = {
  routes: PropTypes.object,
  children: PropTypes.object.isRequired,
};

export default Main;
