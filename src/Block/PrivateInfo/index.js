import React from 'react';
import { connect } from 'react-redux';

import CopyText from 'Root/components/CopyText';
// import stakeAction from 'Root/helpers/dashboard/stake';

import styles from './styles.less';

const PrivateInfo = ({ wallet }) => {
  // const handleStake = async (type) => {
  //   stakeAction(activeAccount, parseFloat(stakeInput), type);
  // };

  const activeAccount = wallet[0];

  return (
    <>
      <h6 className={styles.label}>Your address</h6>
      <p className={styles.info}>
        <span>{activeAccount.address}</span>
        <CopyText text={activeAccount.address} icon />
      </p>
      <h6 className={styles.label}>Your private key</h6>
      <p className={styles.info}>
        <span>{activeAccount.privateKey}</span>
        <CopyText text={activeAccount.privateKey} icon />
      </p>

      {/* <h6 className={styles.label}>Staking balance</h6>
      <p className={styles.info}>{activeAccount.stakingBalance}</p>

      <input
        type="number"
        placeholder="Stake"
        onChange={(e) => {
          // if (parseFloat(e.target.value) > activeAccount.balance) {
          //   setError('Not enough staking balance');
          // } else {
          //   setError('');
          // }

          setStakeInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleStake('deposit');
        }}
      >
        Deposit
      </button>

      <button
        onClick={() => {
          handleStake('withdraw');
        }}
      >
        Withdraw
      </button>
      <p>{error}</p> */}
    </>
  );
};

export default connect((store) => ({
  wallet: store.wallet,
}))(PrivateInfo);
