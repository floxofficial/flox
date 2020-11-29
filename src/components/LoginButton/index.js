import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const LoginButton = ({ item }) => (
  <div className={styles.box}>
    <div className="row align-items-center">
      <div className="col-auto pr-3">
        <div className={styles.icon}><span className={item.icon} /></div>
      </div>
      <div className="col-auto pl-0">
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </div>
  </div>
);

LoginButton.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LoginButton;
