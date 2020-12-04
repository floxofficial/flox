import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import styles from './styles.less';

const SelectOption = ({
  items, height, width, fontSize, className,
}) => {
  const [selected, setSelected] = useState(items[0]);
  const styleSheet = {
    div: {
      minWidth: `${width}`,
    },
  };
  return (
    <div className={classNames(styles.dropdown, className)}>
      <Dropdown style={{ width: `${width}` }}>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{ height: `${height}`, width: `${width}`, fontSize: `${fontSize}px` }}
        >
          {selected.label}
        </Dropdown.Toggle>
        <Dropdown.Menu style={styleSheet.div}>
          {items.map(item => (
            <Fragment key={item.value}>
              <Dropdown.Item eventKey={item.value} onClick={() => { setSelected(item); }}>
                {item.label}
              </Dropdown.Item>
            </Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

SelectOption.defaultProps = {
  fontSize: 16,
  width: '100%',
  height: 'auto',
  className: '',
};

SelectOption.propTypes = {
  items: PropTypes.array.isRequired,
  fontSize: PropTypes.number,
  height: PropTypes.any,
  width: PropTypes.any,
  className: PropTypes.string,
};

export default SelectOption;
