import React from 'react';
import QR from 'qrcode.react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import shorter from 'Root/helpers/shorter';
import CopyText from 'Root/components/CopyText';
import ModalDialog from 'Root/components/ModalDialog';

import styles from './styles.less';

const QrCodeModal = ({ show, setShow, address }) => (
  <ModalDialog show={show} setShow={setShow}>
    <div className={styles.content}>
      <div className={classNames(styles.box, styles['qr-box'])}>
        <div className="row align-items-center">
          <div className="col-auto">
            <QR value={address} size={153} bgColor="#fff" fgColor="#1d45db" />
          </div>
          <div className="col text-center">
            <h1 className={styles.scan}>SCAN ME</h1>
          </div>
        </div>
      </div>
      <CopyText
        text={address}
        content={
          <span className={classNames(styles.box, styles['address-box'])}>{shorter(address, 17)}</span>
        }
      />
    </div>
  </ModalDialog>
);

QrCodeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default QrCodeModal;
