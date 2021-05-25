import classNames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';

import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import Checkbox from 'Root/components/Checkbox';
import bigIntToNumber from 'Root/helpers/bigIntToNumber';
import validateAddress from 'Root/helpers/validateAddress';
import SelectOption from 'Root/components/SelectOption';
import ConfirmModal from 'Root/Block/ModalContent/ConfirmModal';

import styles from './styles.less';
import { parse } from 'uuid';

class Send extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      showModal: false,
      showAdvance: false,
      selectedValue: { value: 'CFX', label: 'CFX' },
      transaction: {
        from: '',
        to: '',
        amount: '',
        token: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onShowModal = this.onShowModal.bind(this);
    this.onShowAdvance = this.onShowAdvance.bind(this);
    this.onSetSelectedValue = this.onSetSelectedValue.bind(this);
  }

  onChange() {
    this.setState({ checked: !this.state.checked });
  }

  onShowModal(status, transaction) {
    this.setState({
      showModal: status,
      transaction,
    });
  }

  onShowAdvance() {
    this.setState({ showAdvance: !this.state.showAdvance });
  }

  onSetSelectedValue(value) {
    this.setState({ selectedValue: value });
    // console.warn(value);
  }

  async onSubmit(values) {
    const { wallet } = this.props;
    const { selectedValue } = this.state;

    const transaction = {
      to: values.address,
      amount: values.amount,
      from: wallet[0].address,
      token: selectedValue.value,
      gasPrice: parseFloat(values.gasPrice) || 1,
      gasLimit: parseFloat(values.gasLimit) || 55000,
    };

    this.onShowModal(true, transaction);
  }

  validateForm(values) {
    const errors = {};

    const { options, tokens, wallet } = this.props;
    const network = options.network === 'mainnet' ? 1 : 0;
    const { selectedValue } = this.state;
    const selectedToken = tokens.find((x) => x.symbol === selectedValue.value);
    const tokenBalance =
      selectedValue.value === 'CFX'
        ? wallet[0].balance
        : bigIntToNumber(selectedToken.balance);

    if (!values.address) {
      errors.address = 'Address is required.';
    } else if (!validateAddress(values.address, network)) {
      errors.address = 'Invalid address.';
    }

    if (!values.amount) {
      errors.amount = 'Amount is required.';
    } else {
      const amountFloat = values.amount ? parseFloat(values.amount) : 0;

      if (amountFloat > tokenBalance || amountFloat === 0) {
        errors.amount = 'Insufficient amount.';
      }
    }

    return errors;
  }

  render() {
    const { tokens, options } = this.props;

    const filteredTokens = tokens.filter((x) => x.balance != 0);
    const items = filteredTokens.map((x) => ({ value: x.symbol, label: x.symbol }));

    items.unshift({
      value: 'CFX',
      label: 'CFX',
    });

    return (
      <div className="row">
        <div className="col-10">
          <Form
            mutators={{
              setMax: (args, state, utils) => {
                const { tokens, wallet } = this.props;
                const { selectedValue } = this.state;

                let maxBalance;

                if (selectedValue.value === 'CFX') {
                  maxBalance = wallet[0].balance;
                } else {
                  const { balance } = tokens.find(
                    (x) => x.symbol === selectedValue.value,
                  );
                  maxBalance = bigIntToNumber(balance);
                }

                utils.changeValue(state, 'amount', () => maxBalance);
              },
            }}
            onSubmit={(values) => this.onSubmit(values)}
            validate={(values) => this.validateForm(values)}
            render={({ submitError, handleSubmit, submitting, form, values }) => (
              <form
                className={styles.form}
                onSubmit={(event) => {
                  handleSubmit(event).then(() => {
                    form.reset();
                  });
                }}
              >
                <div className="form-group">
                  <label className="label-primary">To Address</label>
                  <Field name="address">
                    {({ input, meta }) => (
                      <Input
                        type="text"
                        placeholder={
                          options.network === 'mainnet'
                            ? 'cfx:aaketjh9tkj5g2k4zx3kfvb9vkku8nr006n0en4fhe'
                            : 'cfxtest:aaketjh9tkj5g2k4zx3kfvb9vkku8nr006n0en4fhe'
                        }
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
                            setMax={() => {
                              form.mutators.setMax();
                            }}
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
                  <div className="col-auto">
                    <h6 className={styles.fee}>Transaction fee</h6>
                  </div>
                  <div className="col-auto">
                    <p className={styles['fee-value']}>
                      {(parseFloat(values.gasPrice) || 1) *
                        (parseFloat(values.gasLimit) || 55000)}
                      <span> drip</span>
                    </p>
                  </div>
                </div>

                <Button
                  variant="base"
                  onClick={() => this.onShowAdvance()}
                  content={
                    <>
                      <span>Advance</span>
                      <span
                        className={classNames(
                          'icon-caret-down',
                          styles.icon,
                          this.state.showAdvance && styles.rotate,
                        )}
                      />
                    </>
                  }
                  fontSize={14}
                  fontWeight={500}
                  size="90px"
                  className="mt-4 h-100"
                />
                <Collapse in={this.state.showAdvance}>
                  <div id="collapse-content">
                    {/* <div className="mt-4">
                      <Checkbox
                        label="Recommended"
                        onChange={this.onChange}
                        checked={this.state.checked}
                      />
                    </div> */}

                    <div className="row mt-3">
                      <div className="col form-group mb-0">
                        <label className="label-primary pt-2">
                          Gas Price
                          <span className="label-optional"> (Gdrip)</span>
                        </label>
                        <Field name="gasPrice">
                          {({ input, meta }) => (
                            <Input
                              type="number"
                              placeholder="1"
                              input={input}
                              meta={meta}
                              disabled={this.state.checked}
                            />
                          )}
                        </Field>
                      </div>
                      <div className="col form-group mb-0">
                        <label className="label-primary pt-2">Gas Limit</label>
                        <Field name="gasLimit">
                          {({ input, meta }) => (
                            <Input
                              type="number"
                              placeholder="55000"
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
                    onClick={() => {}}
                  />
                </div>
              </form>
            )}
          />
          <ConfirmModal
            show={this.state.showModal}
            setShow={this.onShowModal}
            transaction={this.state.transaction}
          />
        </div>
      </div>
    );
  }
}

export default connect((store) => ({
  tokens: store.tokens,
  options: store.options,
  wallet: store.wallet,
}))(Send);
