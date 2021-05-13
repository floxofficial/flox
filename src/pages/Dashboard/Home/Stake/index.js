import React from 'react';
import RadioButton from 'Root/components/RadioButton';
import styles from './styles.less';

const Stake = () => (
  <>
    <div className="d-flex">
      <div className={styles.balance}>
        <div className={styles['balance-title']}>
          Stake balance
        </div>
        <div className={styles['balance-value']}>
          13.2
          <span>CFX</span>
        </div>
      </div>
      <div className={styles.balance}>
        <div className={styles['balance-title']}>
          Earned balance
          <span>(APY 4%)</span>
        </div>
        <div className={styles['balance-value']}>
          0.0112
          <span>CFX</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h6 className={styles.title}>I want to …?</h6>
        <RadioButton />
      </div>
    </div>
  </>
);

export default Stake;
