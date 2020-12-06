import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import QR from 'qrcode.react';
import { Overlay, Tooltip } from 'react-bootstrap';
import CopyText from 'Root/components/CopyText';
import styles from './styles.less';

const Balance = ({ balance, address }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <p className={styles['balance-title']}>Total balance</p>
      <h6 className={styles['balance-value']}>
        <span>{balance}</span>
        <span className={styles.currency}> CFX</span>
      </h6>
      <div className="row justify-content-between mt-3 pt-2 align-items-center">
        <div className="col-auto"><h6 className={styles['address-title']}>Your Address</h6></div>
        <div className="col-auto">
          <a
            className={styles.qr}
            ref={target}
            onClick={() => setShow(!show)}
          >
            QR-code
          </a>
          <Overlay target={target.current} show={show} placement="top">
            {props => (
              <Tooltip id="qr" {...props} className="tooltip-qr">
                <QR
                  value={address}
                  size={123}
                />
              </Tooltip>
            )}
          </Overlay>
        </div>
      </div>
      <div className={styles.address}>
        <CopyText
          text={address}
          content={<span className={styles['address-text']}>{address}</span>}
        />
      </div>
    </>
  );
};

Balance.propTypes = {
  balance: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Balance;
