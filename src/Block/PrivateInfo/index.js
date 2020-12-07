import React from 'react';
import PropTypes from 'prop-types';
import CopyText from 'Root/components/CopyText';
import styles from './styles.less';

const PrivateInfo = ({ address, privateKey }) => (
  <>
    <h6 className={styles.label}>Your address</h6>
    <p className={styles.info}>
      <span>{address}</span>
      <CopyText text={address} icon />
    </p>
    <h6 className={styles.label}>Your private key</h6>
    <p className={styles.info}>
      <span>{privateKey}</span>
      <CopyText text={privateKey} icon />
    </p>
  </>
);

PrivateInfo.propTypes = {
  address: PropTypes.string.isRequired,
  privateKey: PropTypes.string.isRequired,
};

export default PrivateInfo;
