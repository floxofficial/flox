import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const RadioButton = ({ radioGroups, defaultValue }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    console.warn(event.target.value);
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, []);
  return (
    <div className={styles.container}>
      {radioGroups.map((radio, index) => (
        <div key={index} className={styles.checkbox} onClick={() => setValue(radio.value)}>
          <input
            type="radio"
            value={radio.value}
            checked={value === radio.value}
            onChange={handleChange}
          />
          <label>{radio.label}</label>
        </div>
      ))}
    </div>
  );
};

RadioButton.defaultProps = {
  defaultValue: '',
};

RadioButton.propTypes = {
  radioGroups: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
};

export default RadioButton;
