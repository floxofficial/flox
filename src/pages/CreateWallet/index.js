import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';
import { walletInfoPage } from 'Root/static/routes';
import Title from 'Root/components/Title';
import Button from 'Root/components/Button';
import Input from 'Root/components/Input';
import styles from './styles.less';

class CreateWallet extends Component {
  onSubmit(values) {
    // console.warn(values);
  }

  validateForm(values) {
    const errors = {};
    if (values.password && values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters.';
    }
    return errors;
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-11">
          <Title text="Create a new wallet" mt={48} link="/" />
          <Form
            onSubmit={values => this.onSubmit(values)}
            validate={values => this.validateForm(values)}
            render={({
              submitError, handleSubmit, submitting, invalid,
            }) => (
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
                {submitError && <div className="error">{submitError}</div>}
                <Button
                  type="submit"
                  content="Create New Wallet"
                  variant="primary"
                  size="100%"
                  fontWeight={500}
                  className="mt-4"
                  disabled={submitting}
                  onClick={() => { this.props.history.push(walletInfoPage); }}
                />
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CreateWallet);
