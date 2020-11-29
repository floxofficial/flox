import React, { Component } from 'react';
import LoginButton from 'Root/components/LoginButton';
import styles from './styles.less';

class HomePage extends Component {
  render() {
    const buttons = [
      {
        title: 'Create Wallet', desc: 'Create a new wallet', icon: 'icon-plus-math', link: '/',
      },
      {
        title: 'Private key', desc: 'Unlock with private key', icon: 'icon-restore', link: '/',
      },
      {
        title: 'Keystore file', desc: 'Unlock with keystore file', icon: 'icon-file', link: '/',
      },
      {
        title: 'Ledger', desc: 'Sign and connect with ledger', icon: 'icon-ledger', link: '/',
      },
    ];

    return (
      <>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-10">
            <h1 className={styles.title}>How would you like to access your wallet?</h1>
            <div className={styles.buttons}>
              {buttons.map((button, index) => (
                <div key={`btn-${index}`}>
                  <LoginButton item={button} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
