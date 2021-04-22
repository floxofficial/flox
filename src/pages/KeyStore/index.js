import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import { withRouter } from 'react-router-dom';

import Title from 'Root/components/Title';
import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import FileUpload from 'Root/components/FileUpload';
import keystoreAction from 'Root/actions/wallet/keystore';
import { dashboardPage } from 'Root/static/routes';

import styles from './styles.less';

class KeyStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {},
      hasError: false,
      content: '',
    };

    this.onSetFile = this.onSetFile.bind(this);
  }

  onSetFile(file) {
    if (file.hasError) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        file: file.file,
        content: file.content,
      });
    }
  }

  onSubmit(values) {
    const result = keystoreAction({
      password: values.password,
      content: this.state.content,
    });

    if (result) {
      return this.props.history.push(dashboardPage);
    }

    return {
      password: 'Wrong password',
    };
  }

  validateForm() {
    const errors = {};
    return errors;
  }

  render() {
    const { hasError } = this.state;

    return (
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-11">
          <Title text="Unlock with keystore file" mt={48} link="/" />
          <div className={styles.upload}>
            <FileUpload setFile={this.onSetFile} />
            {this.state.file && this.state.file.name && (
              <>
                <Form
                  onSubmit={(values) => this.onSubmit(values)}
                  validate={(values) => this.validateForm(values)}
                  render={({ submitError, handleSubmit, pristine }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
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
                        content="Unlock wallet"
                        variant="primary"
                        size="100%"
                        fontWeight={500}
                        className="mt-4"
                        disabled={pristine || hasError}
                      />
                    </form>
                  )}
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(KeyStore);
