import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import Input from 'Root/components/Input';
import Button from 'Root/components/Button';
import RadioButton from 'Root/components/RadioButton';
import stakeAction from 'Root/helpers/dashboard/stake';

import styles from './styles.less';

const radioGroups = [
  { value: 'deposit', label: 'Deposit' },
  { value: 'withdraw', label: 'Withdraw' },
];

const Stake = ({ wallet }) => {
  const [method, setMethod] = useState('deposit');
  // const [buttonDisabled, setButtonDisabled] = useState(false);

  const activeAccount = wallet[0];

  const validateForm = async (values) => {
    const errors = {};

    if (!values.amount) {
      errors.amount = 'Required.';
    }

    if (method === 'deposit') {
      if (parseFloat(values.amount) > parseFloat(activeAccount.balance)) {
        errors.amount = 'Insufficient balance.';
      } else if (parseFloat(values.amount) < 1) {
        errors.amount = 'Amount should be at least 1.';
      }
    } else if (parseFloat(values.amount) > parseFloat(activeAccount.stakingBalance)) {
      /* disable-eslint-inline */
      errors.amount = 'Insufficient staking balance.';
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    // setButtonDisabled(true);
    const tx = await stakeAction(activeAccount, parseFloat(values.amount), method);
    console.log(tx);
    // setButtonDisabled(false);
  };

  const handleChangeRadio = (e) => {
    setMethod(e);
  };

  return (
    <>
      <div className="d-flex">
        <div className={styles.balance}>
          <div className={styles['balance-title']}>Stake balance</div>
          <div className={styles['balance-value']}>
            {activeAccount.stakingBalance}
            <span>CFX</span>
          </div>
        </div>
        {/* <div className={styles.balance}>
        <div className={styles['balance-title']}>
          Earned balance
          <span>(APY 4%)</span>
        </div>
        <div className={styles['balance-value']}>
          0.0112
          <span>CFX</span>
        </div>
      </div> */}
      </div>
      <div className="row">
        <div className="col-12">
          <h6 className={styles.title}>I want to …?</h6>
          <RadioButton
            radioGroups={radioGroups}
            defaultValue={radioGroups[0].value}
            onChange={handleChangeRadio}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: '40px' }}>
        <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
          <Form
            onSubmit={(values) => handleSubmit(values)}
            validate={(values) => validateForm(values)}
            render={({ handleSubmit, form, pristine }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className="label-primary">Amount</label>
                <div className="d-flex">
                  <div className="d-flex flex-column w-100 mr-3">
                    <Field name="amount">
                      {({ input, meta }) => (
                        <Input type="number" placeholder="1" input={input} meta={meta} />
                      )}
                    </Field>
                  </div>
                  <div className={styles.label}>CFX</div>
                </div>
                <Button
                  type="submit"
                  content="Submit"
                  variant="primary"
                  size="108px"
                  fontWeight={500}
                  className="mt-3"
                  disabled={pristine}
                />
              </form>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default connect((store) => ({
  wallet: store.wallet,
}))(Stake);
