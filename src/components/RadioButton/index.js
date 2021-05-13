import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const RadioButton = props => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    // event.preventDefault();
    setValue(event.target.value);
    console.warn(event.target.value);
  };
  return (
    <div className={styles.container}>
      <label>
        <input
          type="radio"
          value="small"
          checked={value === 'small'}
          onChange={handleChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          value="medium"
          checked={value === 'medium'}
          onChange={handleChange}
        />
        Medium
      </label>
    </div>
  );
};

RadioButton.propTypes = {

};

export default RadioButton;
