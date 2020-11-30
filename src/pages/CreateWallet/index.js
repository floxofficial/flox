import React, { Component } from 'react';
import Title from 'Root/components/Title';
import Button from 'Root/components/Button';
import styles from './styles.less';

class CreateWallet extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-11">
            <Title text="Create a new wallet" mt={48} link="/" />
            <Button content="Create New Wallet" variant="primary" size="100%" fontWeight={500} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateWallet;
