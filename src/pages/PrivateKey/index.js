import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import { withRouter } from 'react-router-dom';

import Title from 'Root/components/Title';
import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import { walletInfoPage } from 'Root/static/routes';
import importPrivateKeyAction from 'Root/actions/wallet/import';
import validatePrivateKey from 'Root/helpers/validatePrivateKey';

import styles from './styles.less';

class PrivateKey extends Component {
  onSubmit(values) {
    const result = importPrivateKeyAction(values);

    if (result) {
      return this.props.history.push(walletInfoPage);
    }

    return {
      privateKey: 'Invalid privateKey',
    };
  }

  validateForm(values) {
    const errors = {};

    if (!validatePrivateKey(values.privateKey)) {
      errors.privateKey = 'Invalid privateKey';
    }

    if (values.password && values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters.';
    }

    return errors;
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-11">
          <Title text="Unlock with private key" mt={48} link="/" />
          <Form
            onSubmit={(values) => this.onSubmit(values)}
            validate={(values) => this.validateForm(values)}
            render={({ submitError, handleSubmit, invalid }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className="label-primary">Set a password</label>
                <Field name="password">
                  {({ input, meta }) => (
                    <Input
                      type="password"
                      placeholder="Do not forget this password"
                      variant="pass"
                      input={input}
                      meta={meta}
                    />
                  )}
                </Field>
                <label className="label-primary">PrivateKey</label>
                <Field name="privateKey">
                  {({ input, meta }) => (
                    <Input
                      type="password"
                      placeholder="Enter your privateKey here"
                      variant="pass"
                      input={input}
                      meta={meta}
                    />
                  )}
                </Field>
                {submitError && <div className="error">{submitError}</div>}
                <Button
                  type="submit"
                  content="Unlock Wallet"
                  variant="primary"
                  size="100%"
                  fontWeight={500}
                  className="mt-4"
                  disabled={invalid}
                />
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PrivateKey);
