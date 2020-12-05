import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

const Checkbox = ({ label, checked, onChange }) => (
  <div className={styles.checkbox} onChange={() => onChange(!checked)}>
    <label>
      <input id="check" type="checkbox" defaultChecked={checked} className={styles.input} />
      <span className={styles.box} />
      {label}
    </label>
  </div>
);
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
