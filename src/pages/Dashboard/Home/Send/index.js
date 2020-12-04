import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import { Form as FormCheck } from 'react-bootstrap';
import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import SelectOption from 'Root/components/SelectOption';
import styles from './styles.less';
import Checkbox from '../../../../components/Checkbox';

class Send extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({ checked: !this.state.checked });
    console.warn(this.state.checked);
  }

  onSubmit(values) {
    // console.warn(values);
  }

  validateForm(values) {
    const errors = {};
    return errors;
  }

  render() {
    const items = [
      { value: 'cfx', label: 'CFX' },
      { value: 'aaa', label: 'Aaa' },
      { value: 'bbb', label: 'Bbb' },
    ];
    return (
      <div className="row">
        <div className="col-8">
          <Form
            onSubmit={values => this.onSubmit(values)}
            validate={values => this.validateForm(values)}
            render={({
              submitError, handleSubmit, submitting,
            }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="label-primary">To Address</label>
                  <Field name="address">
                    {({ input, meta }) => (
                      <Input
                        type="text"
                        placeholder="Ex. 0x115fcce25b23b7341c6b4da4ce04c43886f0acd2"
                        input={input}
                        meta={meta}
                      />
                    )}
                  </Field>
                </div>
                <div className="form-group">
                  <label className="label-primary pt-2">Amount</label>
                  <div className="row">
                    <div className="col pr-0">
                      <Field name="amount">
                        {({ input, meta }) => (
                          <Input
                            type="text"
                            placeholder="1"
                            input={input}
                            meta={meta}
                          />
                        )}
                      </Field>
                    </div>
                    <div className="col-auto pl-3">
                      <SelectOption
                        items={items}
                        height="44px"
                        width="100px"
                        fontSize={16}
                        className={styles.drop}
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-between mt-2">
                  <div className="col-auto"><h6 className={styles.fee}>Transaction fee</h6></div>
                  <div className="col-auto">
                    <p className={styles['fee-value']}>
                      0.00845
                      <span> CFX</span>
                    </p>
                  </div>
                </div>

               <div className="mt-4">
                 <Checkbox label="Recommended" />
               </div>

                {submitError && <div className="error">{submitError}</div>}
                <Button
                  type="submit"
                  content="Send"
                  variant="primary"
                  size="104px"
                  fontWeight={500}
                  className="mt-4 mb-5"
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

export default Send;
