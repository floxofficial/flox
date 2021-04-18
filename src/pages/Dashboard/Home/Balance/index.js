import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import React, { useState } from 'react';

import CopyText from 'Root/components/CopyText';
import QrCodeModal from 'Root/Block/ModalContent/QrCodeModal';

import styles from './styles.less';

const Balance = ({ balance, address, options }) => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = (status) => {
    setShowModal(status);
  };

  return (
    <>
      <p className={styles['balance-title']}>Total balance</p>
      <h6 className={styles['balance-value']}>
        <span>{balance}</span>
        <span className={styles.currency}> CFX</span>
        {/* <span>${parseFloat(balance) * options.usd}</span> */}
      </h6>
      <div className="row justify-content-between mt-3 pt-2 align-items-center">
        <div className="col-auto">
          <h6 className={styles['address-title']}>Your Address</h6>
        </div>
        <div className="col-auto">
          <a className={styles.qr} onClick={() => setShowModal(true)}>
            QR-code
          </a>
          <QrCodeModal show={showModal} setShow={onShowModal} address={address} />
        </div>
      </div>
      <div className={classNames(styles.address, styles.box)}>
        <CopyText
          text={address}
          content={<span className={styles['address-text']}>{address}</span>}
        />
      </div>
    </>
  );
};

Balance.propTypes = {
  address: PropTypes.string.isRequired,
};

export default connect((store) => ({
  options: store.options,
}))(Balance);
