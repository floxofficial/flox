import React, { Component } from 'react';
import Title from 'Root/components/Title';
import CopyText from 'Root/components/CopyText';
import styles from './styles.less';

class WalletInfo extends Component {
  render() {
    const address = '0x115fcce25b23b7341c6b4da4ce04c43886f0acd2';
    const key = '0x4b8276fc8003a89fe2a0ad9de26ca82c2e26cb3339877b487662bd7219797a9e';
    return (
      <div className="row justify-content-around">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-11">
          <Title text="Your wallet info" mt={48} />
          <p className={styles.message}>
            Do not lose your private key! There is no way to recover lost keys.
          </p>
          <div className="mt-5">
            <h6 className={styles.label}>Your address</h6>
            <p className={styles.info}>
              {address}
              <CopyText text={address} icon />
            </p>
            <h6 className={styles.label}>Your private key</h6>
            <p className={styles.info}>
              {key}
              <CopyText text={key} icon />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WalletInfo;
