import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.less';

const Title = ({ text, mt, link }) => (
  <div style={{ marginTop: `${mt}px` }}>
    <h1 className={styles.title}>
      {link && (
        <Link to={link}>
          <span className="icon-arrow-left" />
        </Link>
      )}
      {text}
    </h1>
  </div>
);

Title.defaultProps = {
  link: '',
  mt: 0,
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  mt: PropTypes.number,
};

export default Title;
