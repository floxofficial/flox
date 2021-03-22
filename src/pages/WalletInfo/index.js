import fs from 'fs';
import React from 'react';
import { remote } from 'electron';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Title from 'Root/components/Title';
import Button from 'Root/components/Button';
import PrivateInfo from 'Root/Block/PrivateInfo';
import keystoreMaker from 'Root/helpers/keystore';
import { dashboardPage } from 'Root/static/routes';

import styles from './styles.less';

const WalletInfo = (props) => {
  const { wallet, password } = props;
  const activeAccount = wallet.find((x) => x.active);

  const keystore = keystoreMaker(activeAccount, password);

  const { dialog } = remote;
  const currentWindow = remote.getCurrentWindow();

  const options = {
    title: 'Save keystore',
    buttonLabel: 'Save keystore',
    filters: [{ name: 'All Files', extensions: ['*'] }],
  };

  const handleContinue = () => {
    props.history.push(dashboardPage);
  };

  return (
    <div className="row justify-content-around">
      <div className="col-xl-8 col-lg-6 col-md-8 col-sm-10 col-11 px-4">
        <Title text="Your wallet info" mt={48} />
        <p className={styles.message}>
          Do not lose your private key! There is no way to recover lost keys.
        </p>
        <div className="mt-5">
          <PrivateInfo
            privateKey={activeAccount.privateKey}
            address={activeAccount.address}
          />
        </div>
        <a
          className={styles.download}
          onClick={() => {
            dialog.showSaveDialog(currentWindow, options, (filename) => {
              fs.writeFileSync(filename, keystore, 'utf-8');
            });
          }}
        >
          <div className={styles['download-text']}>Download Keystore file</div>
          <div className="icon-upload" />
        </a>
        <Button
          variant="primary"
          content="Continue"
          size="118px"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default withRouter(
  connect((store) => ({
    wallet: store.wallet,
    password: store.password,
  }))(WalletInfo),
);
