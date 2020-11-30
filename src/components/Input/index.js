import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.less';

const Input = ({
  type, defaultValue, variant, size, height, fontSize, disabled, placeholder, name, input, meta, autoFocus,
}) => {
  const [visibleType, setVisibleType] = useState(type);
  const toggleVisible = () => {
    if (visibleType === 'password') {
      setVisibleType('text');
    } else {
      setVisibleType(type);
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const generateBtn = () => {
    if (variant === 'pass') {
      return (
        <button
          type="button"
          className={styles.icon}
          onClick={toggleVisible}
        >
          <span className={visibleType === 'text' ? 'icon-eye' : 'icon-eye'} />
        </button>
      );
    }

    return null;
  };
  return (
    <div className={classNames(styles.group)}>
      <input
        type={visibleType}
        className="input"
        value={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        style={{ width: `${size}`, fontSize: `${fontSize}px`, height: `${height}px` }}
        name={name}
        {...input}
        ref={inputRef}
      />
      {generateBtn()}
    </div>
  );
};

Input.defaultProps = {
  defaultValue: '',
  variant: '',
  disabled: false,
  placeholder: '',
  name: '',
  autoFocus: false,
  size: '100%',
  fontSize: 16,
  height: 44,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  fontSize: PropTypes.number,
  height: PropTypes.number,
};

export default Input;
