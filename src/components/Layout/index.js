import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.less';

const Layout = ({ children }) => (
  <div className={classNames('container-fluid', styles.layout)} id="container">
    <div id="header">
      <Header />
    </div>
    <div id="body">
      {children}
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {

};

export default Layout;
