import React from 'react';
import { shell } from 'electron';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from 'Root/components/Button';
import ModalDialog from 'Root/components/ModalDialog';
import currentExplorer from 'Root/helpers/currentExplorer';

import styles from './styles.less';

const StatusModal = ({ show, setShow, hash }) => {
  const handleClick = () => {
    shell.openExternal(`${currentExplorer()}/transaction/${hash}`);

    setShow(false);
  };

  return (
    <ModalDialog show={show} setShow={setShow}>
      <div className={styles.content}>
        <div className="d-flex flex-column justify-content-center text-center">
          <span className={classNames('icon-correct-circle', styles.icon)} />
          <h1 className={styles.title}>Successful Sending</h1>
          <p className={styles.text}>{hash}</p>
          <Button
            variant="primary"
            content="View in Confluxscan"
            fontSize={14}
            fontWeight={500}
            size="163px"
            className="mx-auto"
            onClick={handleClick}
          />
        </div>
      </div>
    </ModalDialog>
  );
};

StatusModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default StatusModal;
