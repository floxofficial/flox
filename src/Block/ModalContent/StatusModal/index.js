import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalDialog from 'Root/components/ModalDialog';
import Button from 'Root/components/Button';
import styles from './styles.less';

const StatusModal = ({ show, setShow, address }) => (
  <ModalDialog show={show} setShow={setShow}>
    <div className={styles.content}>
      <div className="d-flex flex-column justify-content-center text-center">
        <span className={classNames('icon-correct-circle', styles.icon)} />
        <h1 className={styles.title}>Successful Sending</h1>
        <p className={styles.text}>{address}</p>
        <Button
          variant="primary"
          content="View in Confluxscan"
          fontSize={14}
          fontWeight={500}
          size="163px"
          className="mx-auto"
        />
      </div>
    </div>
  </ModalDialog>
);

StatusModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default StatusModal;
