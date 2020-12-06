import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog from 'Root/components/ModalDialog';
import styles from './styles.less';

const QrCodeModal = ({ show, setShow }) => (
  <ModalDialog show={show} setShow={setShow}>
    <div style={{ height: '200px' }} />
  </ModalDialog>
);

QrCodeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default QrCodeModal;
