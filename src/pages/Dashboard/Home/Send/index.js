import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';
import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import SelectOption from 'Root/components/SelectOption';
import Checkbox from 'Root/components/Checkbox';
import ConfirmModal from 'Root/Block/ModalContent/ConfirmModal';
import styles from './styles.less';

class Send extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      showModal: false,
      showAdvance: false,
      selectedValue: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onShowModal = this.onShowModal.bind(this);
    this.onShowAdvance = this.onShowAdvance.bind(this);
    this.onSetSelectedValue = this.onSetSelectedValue.bind(this);
  }

  onChange() {
    this.setState({ checked: !this.state.checked });
  }

  onShowModal(status) {
    this.setState({ showModal: status });
  }

  onShowAdvance() {
    this.setState({ showAdvance: !this.state.showAdvance });
  }

  onSetSelectedValue(value) {
    this.setState({ selectedValue: value });
    // console.warn(value);
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
        <div className="col-10">
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
                            type="number"
                            variant="max"
                            setMax={() => {}}
                            placeholder="1"
                            input={input}
                            meta={meta}
                          />
                        )}
                      </Field>
                    </div>
                    <div className="col-auto pl-3" style={{ paddingTop: '6.5px' }}>
                      <SelectOption
                        items={items}
                        height="45px"
                        width="100px"
                        fontSize={16}
                        className={styles.drop}
                        searchable
                        setValue={this.onSetSelectedValue}
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

                <Button
                  variant="base"
                  onClick={() => this.onShowAdvance()}
                  content={(
                    <>
                      <span>Advance</span>
                      <span
                        className={classNames('icon-caret-down',
                          styles.icon,
                          this.state.showAdvance && styles.rotate)}
                      />
                    </>
                  )}
                  fontSize={14}
                  fontWeight={500}
                  size="90px"
                  className="mt-4 h-100"
                />
                <Collapse in={this.state.showAdvance}>
                  <div id="collapse-content">
                    <div className="mt-4">
                      <Checkbox
                        label="Recommended"
                        onChange={this.onChange}
                        checked={this.state.checked}
                      />
                    </div>

                    <div className="row mt-3">
                      <div className="col form-group mb-0">
                        <label className="label-primary pt-2">
                          Gas
                          <span className="label-optional">
                            {' '}
                            (Gdrip)
                          </span>
                        </label>
                        <Field name="gas">
                          {({ input, meta }) => (
                            <Input
                              type="text"
                              placeholder="1"
                              input={input}
                              meta={meta}
                              disabled={this.state.checked}
                            />
                          )}
                        </Field>
                      </div>
                      <div className="col form-group mb-0">
                        <label className="label-primary pt-2">Gas Price</label>
                        <Field name="price">
                          {({ input, meta }) => (
                            <Input
                              type="text"
                              placeholder="1"
                              input={input}
                              meta={meta}
                              disabled={this.state.checked}
                            />
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                </Collapse>

                {submitError && <div className="error">{submitError}</div>}
                <div>
                  <Button
                    type="submit"
                    content="Send"
                    variant="primary"
                    size="104px"
                    fontWeight={500}
                    className="mt-4-5"
                    disabled={submitting}
                    onClick={() => this.onShowModal(true)}
                  />
                </div>
              </form>
            )}
          />
          <ConfirmModal show={this.state.showModal} setShow={this.onShowModal} />
        </div>
      </div>
    );
  }
}

export default Send;
