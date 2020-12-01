import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import Title from 'Root/components/Title';
import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import styles from './styles.less';

class PrivateKey extends Component {
  onSubmit(values) {
    // console.warn(values);
  }

  validateForm(values) {
    const errors = {};
    return errors;
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-11">
          <Title text="Unlock with private key" mt={48} link="/" />
          <Form
            onSubmit={values => this.onSubmit(values)}
            validate={values => this.validateForm(values)}
            render={({
              submitError, handleSubmit, submitting, invalid,
            }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className="label-primary">Private key</label>
                <Field name="password">
                  {({ input, meta }) => (
                    <Input
                      type="password"
                      placeholder="Enter your private key here"
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
                  disabled={submitting}
                />
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default PrivateKey;
