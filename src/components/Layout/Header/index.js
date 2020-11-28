import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import logo from 'Root/assets/images/logo.png';
import styles from './styles.less';

const Header = props => (
  <div>
    <div className="row justify-content-between">
      <div className="col-auto">
        <img src={logo} alt="Fullet" className={styles.logo} />
      </div>
      <div className="col-auto">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  </div>
);

Header.propTypes = {

};

export default Header;
