import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.less';

const Button = ({
  disabled, content, variant, size, fontSize, type, onClick, className, fontWeight, children,
}) => (
  <button
    type={type}
    disabled={disabled}
    className={classNames(`button-${variant}`, className, styles.btn)}
    onClick={onClick}
    style={{ width: `${size}`, fontSize: `${fontSize}px`, fontWeight: `${fontWeight}` }}
  >
    {children || content}
  </button>
);

Button.defaultProps = {
  disabled: false,
  content: '',
  onClick: () => {},
  type: 'button',
  size: '',
  fontSize: 16,
  className: '',
  fontWeight: 'normal',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  content: PropTypes.any,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.any,
};

export default Button;
