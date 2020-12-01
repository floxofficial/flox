import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import Title from 'Root/components/Title';
import FileUpload from 'Root/components/FileUpload';
import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import styles from './styles.less';

class KeyStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {},
    };
    this.onSetFile = this.onSetFile.bind(this);
  }

  onSetFile(file) {
    this.setState({ file });
  }

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
          <Title text="Unlock with keystore file" mt={48} link="/" />
          <div className={styles.upload}>
            <FileUpload setFile={this.onSetFile} />
            {this.state.file && this.state.file.name && (
            <>
              <Form
                onSubmit={values => this.onSubmit(values)}
                validate={values => this.validateForm(values)}
                render={({
                  submitError, handleSubmit, submitting,
                }) => (
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
                      disabled={submitting}
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

export default KeyStore;
