import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import logo from 'Root/assets/images/logo.png';
import styles from './styles.less';

const Header = (props) => {
  const items = [
    { value: 'main', label: 'Mainet' },
    { value: 'test', label: 'Testnet' },
  ];
  const [selected, setSelected] = useState(items[0]);
  return (
    <div>
      <div className="row justify-content-between align-items-center">
        <div className="col-auto">
          <img src={logo} alt="Fullet" className={styles.logo} />
        </div>
        <div className="col-auto">
          <div className={classNames(styles.dropdown,
            selected === items[0] ? styles.main : styles.test)}
          >
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {selected.label}
              </Dropdown.Toggle>
              <Dropdown.Menu>
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
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {

};

export default Header;
