import React from 'react';
import Loading from 'Root/components/Loading';
import styles from './styles.less';

const WaitingContent = ({ message }) => (
  <div className={styles.container}>
    <div className={styles.loading}>
      <Loading size={60} />
    </div>
    <h1 className={styles.message}>{message}</h1>
  </div>
);

export default WaitingContent;
