import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import RadioButton from 'Root/components/RadioButton';
import Button from 'Root/components/Button';
import Input from 'Root/components/Input';
import capitalizeFirstLetter from 'Root/helpers/capitalizeFirstLetter';
import styles from './styles.less';

const radioGroups = [
  { value: 'stake', label: 'Stake' },
  { value: 'unstake', label: 'Unstake' },
];

const onSubmit = async values => {

};

const Stake = () => {
  const [radio, setRadio] = useState('');
  return (
    <>
      <div className="row">
        <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
          <div className={styles.balance}>
            <div className={styles['balance-title']}>
              Stake balance
            </div>
            <div className={styles['balance-value']}>
              13.2
              <span>CFX</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h6 className={styles.title}>I want to …?</h6>
          <RadioButton
            radioGroups={radioGroups}
            defaultValue={radioGroups[0].value}
            setRadio={setRadio}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: '40px' }}>
        <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
          <Form
            onSubmit={onSubmit}
            render={({
              handleSubmit, form, submitting, pristine, values,
            }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className="label-primary">Amount</label>
                <div className="d-flex align-items-center">
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <Input
                        type="number"
                        placeholder="1"
                        input={input}
                        meta={meta}
                      />
                    )}
                  </Field>
                  <div className={styles.label}>CFX</div>
                </div>
              </form>
            )}
          />
        </div>
      </div>
      <Button
        type="submit"
        content={capitalizeFirstLetter(radio)}
        variant="primary"
        size="108px"
        fontWeight={500}
        className="mt-3"
      />
    </>
  );
};

export default Stake;
