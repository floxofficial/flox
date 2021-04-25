import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import React, { useState, Fragment } from 'react';

import changeNetwork from 'Root/actions/network';
import { homePage } from 'Root/static/routes';
import logo from 'Root/assets/images/logo.svg';
import logoutAction from 'Root/actions/wallet/logout';

import styles from './styles.less';

const Header = ({ isLoggedIn, ...props }) => {
  const items = [
    { value: 'mainnet', label: 'Mainet' },
    { value: 'testnet', label: 'Testnet' },
  ];

  const handleLogout = () => {
    logoutAction();

    props.history.push(homePage);
  };

  const [selected, setSelected] = useState(items[0]);
  return (
    <div>
      <div className="row justify-content-between align-items-center">
        <div className="col-auto">
          <Link to={homePage}>
            <img src={logo} alt="Flox" className={styles.logo} />
          </Link>
        </div>
        <div className="col-auto d-flex align-items-center">
          <div
            className={classNames(
              styles.dropdown,
              selected.value === items[0].value ? styles.main : styles.test,
            )}
          >
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">{selected.label}</Dropdown.Toggle>
              <Dropdown.Menu>
                {items.map((item) => (
                  <Fragment key={item.value}>
                    <Dropdown.Item
                      eventKey={item.value}
                      onClick={() => {
                        setSelected(item);
                        changeNetwork(item.value);
                      }}
                    >
                      {item.label}
                    </Dropdown.Item>
                  </Fragment>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {isLoggedIn && (
            <Link
              to="#"
              onClick={handleLogout}
              className={classNames(styles.logout, 'icon-power-button')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default withRouter(Header);
