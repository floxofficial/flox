import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Header from './Header';
import styles from './styles.less';

const Layout = ({ children }) => (
  <div className={classNames('container-fluid', styles.layout)}>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {

};

export default Layout;
