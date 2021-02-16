import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalDialog from 'Root/components/ModalDialog';
import Button from 'Root/components/Button';
import StatusModal from 'Root/Block/ModalContent/StatusModal';
import styles from './styles.less';

const address = '0x4b8276fc8003a89fe2a0ad9de26ca82c2e26cb3339877b487dd2bd7219797a9e';

const ConfirmModal = ({ show, setShow }) => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const onShowStatusModal = (status) => {
    setShow(false);
    setShowStatusModal(status);
  };

  return (
    <>
      <ModalDialog show={show} setShow={setShow}>
        <div className={styles.content}>
          <h1 className={styles.title}>Confirm transaction</h1>
          <div className="row">
            <div className="col-auto pr-0">
              <div className={classNames(styles.circle, styles['circle-green'])} />
            </div>
            <div className="col flex-column pl-2">
              <div className={styles.label}>From</div>
              <div className={styles.value}>
                0x115fcce25b23b7341c6b4da4ce04c43886f0acd2
              </div>
            </div>
          </div>

          <div className="d-flex flex-column">
            <span className={classNames('icon-long-arrow-down', styles.icon)} />
          </div>

          <div className="row">
            <div className="col-auto pr-0">
              <div className={classNames(styles.circle, styles['circle-brown'])} />
            </div>
            <div className="col flex-column pl-2">
              <div className={styles.label}>To</div>
              <div className={styles.value}>
                0x115fcce25b23b7341c6b4da4ce04c43886f0acd2
              </div>
            </div>
          </div>

          <div
            className={classNames(
              'row justify-content-between align-items-center pt-3',
              styles['txn-box'],
            )}
          >
            <div className="col-auto">
              <h6 className={styles['amount-label']}>Amount</h6>
            </div>
            <div className="col-auto">
              <p className={styles.amount}>280 CFX / $11</p>
            </div>
          </div>
          <div
            className={classNames(
              'row justify-content-between align-items-center',
              styles['txn-box'],
            )}
          >
            <div className="col-auto">
              <h6 className={styles['amount-label']}>Transaction fee</h6>
            </div>
            <div className="col-auto">
              <p className={styles.amount}>280 CFX / $11</p>
            </div>
          </div>

          <div className={classNames('d-flex justify-content-end', styles['button-box'])}>
            <Button
              variant="default"
              content="Cancel"
              size="104px"
              fontSize={16}
              fontWeight={500}
            />

            <Button
              variant="primary"
              content="Confirm"
              size="104px"
              fontSize={16}
              fontWeight={500}
              className="ml-3"
              onClick={() => onShowStatusModal(true)}
            />
          </div>
        </div>
      </ModalDialog>

      <StatusModal show={showStatusModal} setShow={onShowStatusModal} address={address} />
    </>
  );
};

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ConfirmModal;
