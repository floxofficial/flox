import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from 'Root/components/Button';
import sendAction from 'Root/actions/wallet/send';
import ModalDialog from 'Root/components/ModalDialog';
import StatusModal from 'Root/Block/ModalContent/StatusModal';

import styles from './styles.less';

const defaultTransaction = {
  from: '',
  to: '',
  amount: '0',
  gasLimit: 0,
  gasPrice: 0,
  token: 'CFX',
};

const ConfirmModal = ({ show, setShow, transaction = defaultTransaction }) => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [txHash, setTxHash] = useState('');

  const onShowStatusModal = async (status) => {
    const hash = await sendAction(transaction);

    setShow(false);
    setTxHash(hash);
    setShowStatusModal(true);
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
              <div className={styles.value}>{transaction.from}</div>
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
              <div className={styles.value}>{transaction.to}</div>
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
              <p className={styles.amount}>
                {transaction.amount}
                &nbsp;
                {transaction.token}
              </p>
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
              <p className={styles.amount}>
                {transaction.gasPrice * transaction.gasLimit}
                &nbsp; drip
              </p>
            </div>
          </div>

          <div className={classNames('d-flex justify-content-end', styles['button-box'])}>
            <Button
              variant="default"
              content="Cancel"
              size="104px"
              fontSize={16}
              fontWeight={500}
              onClick={() => {
                setShow(false);
              }}
            />

            <Button
              variant="primary"
              content="Confirm"
              size="104px"
              fontSize={16}
              fontWeight={500}
              className="ml-3"
              onClick={() => {
                onShowStatusModal(true);
              }}
            />
          </div>
        </div>
      </ModalDialog>

      <StatusModal show={showStatusModal} setShow={onShowStatusModal} hash={txHash} />
    </>
  );
};

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ConfirmModal;
