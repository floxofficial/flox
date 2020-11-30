import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const Title = ({ text, link }) => (
  <div>
    <h1 className={styles.title}>{text}</h1>
  </div>
);

Title.defaultProps = {
  link: '',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Title;
