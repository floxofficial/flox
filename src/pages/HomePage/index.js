import React, { Component } from 'react';
import LoginButton from 'Root/components/LoginButton';
import * as route from 'Root/static/routes';
import { withRouter } from 'react-router-dom';
import styles from './styles.less';

class HomePage extends Component {
  render() {
    const buttons = [
      {
        title: 'Create Wallet', desc: 'Create a new wallet', icon: 'icon-plus-math', link: route.createWalletPage,
      },
      {
        title: 'Private key', desc: 'Unlock with private key', icon: 'icon-restore', link: route.privateKeyPage,
      },
      {
        title: 'Keystore file', desc: 'Unlock with keystore file', icon: 'icon-file', link: route.keyStorePage,
      },
      {
        title: 'Ledger', desc: 'Sign and connect with ledger', icon: 'icon-ledger', link: '/',
      },
    ];

    return (
      <>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-11">
            <h1 className={styles.title}>How would you like to access your wallet?</h1>
            <div className={styles.buttons}>
              {buttons.map((button, index) => (
                <div key={`btn-${index}`}>
                  <LoginButton item={button} history={this.props.history} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(HomePage);
