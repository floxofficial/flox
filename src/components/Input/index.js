import React, { useState, useEffect, useRef } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.less';

const Input = ({
  type,
  defaultValue,
  variant,
  size,
  height,
  fontSize,
  disabled,
  placeholder,
  name,
  input,
  meta,
  autoFocus,
  setMax,
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

  const renderTooltip = (props) => (
    <Tooltip id="max-tooltip" {...props}>
      Send entire
    </Tooltip>
  );

  const generateBtn = () => {
    if (variant === 'pass') {
      return (
        <button type="button" className={styles.icon} onClick={toggleVisible}>
          <span className={visibleType === 'text' ? 'icon-eye' : 'icon-eye'} />
        </button>
      );
    }

    if (variant === 'max') {
      return (
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <button type="button" className={classNames(styles.icon)}>
            <span
              className={classNames('icon-double-arrow-up', styles.icon)}
              onClick={() => {
                setMax();
              }}
            />
          </button>
        </OverlayTrigger>
      );
    }

    return null;
  };

  const isError = meta && (meta.error || meta.submitError) && meta.touched;

  return (
    <>
      <div className={classNames(styles.group, isError && styles.inputError)} aria-disabled={disabled}>
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
      {isError && <p className="error">{meta.error || meta.submitError}</p>}
    </>
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
  setMax: () => {},
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
  setMax: PropTypes.func,
};

export default Input;
