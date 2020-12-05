import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.less';

const Layout = ({ children, isLoggedIn }) => (
  <div className={classNames('container-fluid', styles.layout, isLoggedIn && styles.dashboard)} id="container">
    <div id="header">
      <Header />
    </div>
    <div id="body">
      {children}
    </div>
    <div id="footer">
      {!isLoggedIn
        && <Footer />
        }
    </div>
  </div>
);

Layout.defaultProps = {
  isLoggedIn: false,
};

Layout.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Layout;
