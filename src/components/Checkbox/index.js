import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const onChange = (check) => {
    setChecked(check);
    // console.warn('isChecked', check);
  };
  return (
    <div className="checkbox" onChange={() => onChange(!checked)}>
      <label>
        <input id="check" type="checkbox" defaultChecked={checked} />
        <span className="box" />
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
