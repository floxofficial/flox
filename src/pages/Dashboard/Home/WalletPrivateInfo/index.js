import fs from 'fs';
import { remote } from 'electron';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';

import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import PrivateInfo from 'Root/Block/PrivateInfo';
import keystoreMaker from 'Root/helpers/keystore';
import ExportFile from 'Root/components/ExportFile';
import warning from 'Root/assets/images/warning.svg';

import styles from './styles.less';

class WalletPrivateInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  validateForm(values) {
    return {};
  }

  onSubmit(values) {
    const { password } = this.props;

    if (password === values.password) {
      this.setState({ checked: true });
    } else {
      return {
        password: 'Wrong password.',
      };
    }
  }

  render() {
    const activeAccount = this.props.wallet.find((x) => x.active);
    const { password } = this.props;
    const keystore = keystoreMaker(activeAccount, password);

    const { dialog } = remote;
    const currentWindow = remote.getCurrentWindow();

    const options = {
      title: 'Save keystore',
      buttonLabel: 'Save keystore',
      filters: [{ name: 'All Files', extensions: ['*'] }],
    };

    return (
      <div className="row">
        <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
          <div className={styles.msg}>
            <img src={warning} alt="icon" />
            {this.state.checked
              ? 'Do not lose your private key! There is no way to recover lost keys.'
              : 'To see backup information (private key), please enter the password'}
          </div>
          {this.state.checked ? (
            <div className={styles.container}>
              <PrivateInfo activeAccount={this.props.activeAccount} />
              <div style={{ paddingTop: '5px' }}>
                <ExportFile
                  text="Download Keystore file"
                  width={239}
                  onClick={() => {
                    dialog.showSaveDialog(currentWindow, options, (filename) => {
                      fs.writeFileSync(filename, keystore, 'utf-8');
                    });
                  }}
                />
              </div>
            </div>
          ) : (
            <Form
              onSubmit={(values) => this.onSubmit(values)}
              validate={(values) => this.validateForm(values)}
              render={({ submitError, handleSubmit, invalid, pristine, submitting }) => (
                <form className={styles.container} onSubmit={handleSubmit}>
                  <label className="label-primary">Password</label>
                  <Field name="password">
                    {({ input, meta }) => (
                      <Input
                        type="password"
                        placeholder="Enter your password here"
                        variant="pass"
                        input={input}
                        meta={meta}
                      />
                    )}
                  </Field>
                  {submitError && <div className="error">{submitError}</div>}
                  <Button
                    type="submit"
                    content="Show"
                    variant="primary"
                    size="104px"
                    fontWeight={500}
                    className="mt-4"
                    disabled={pristine}
                  />
                </form>
              )}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect((store) => ({
  wallet: store.wallet,
  password: store.password,
}))(WalletPrivateInfo);
