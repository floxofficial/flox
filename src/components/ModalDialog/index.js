import React, { useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './styles.less';

const ModalDialog = ({ children, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <button className={classNames('icon-multiply', styles.close)} onClick={handleClose} />
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

ModalDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ModalDialog;
