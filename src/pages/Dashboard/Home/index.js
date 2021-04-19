import React, { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';

import loadDashboard from 'Root/actions/load';
import PrivateInfo from 'Root/Block/PrivateInfo';

import Loading from 'Root/components/Loading';
import Send from './Send';
import Token from './Token';
import Balance from './Balance';
import Transactions from './Transactions';
import styles from './styles.less';

const tokens = [
  { name: 'FCI', value: '2.34' },
  { name: 'LOO', value: '0.01992' },
  { name: 'SMO', value: '0.003622' },
  { name: 'FCI', value: '2.34' },
  { name: 'LOO', value: '0.01992' },
  { name: 'SMO', value: '0.003622' },
  { name: 'SMO', value: '0.003622' },
];

const Dashboard = (props) => {
  const { wallet } = props;
  const activeAccount = wallet.find((x) => x.active);

  // list tokens
  // convert cfx to usd

  if (!activeAccount.loaded) {
    return <Loading isFull />;
  }

  return (
    <div className="row mt-3 pt-2">
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
        <div className={classNames('content-card', styles.card)}>
          <div className={styles.tab}>
            <Tabs defaultActiveKey="send" id="tab">
              <Tab eventKey="send" title="Send">
                <div className="mt-5 pt-2">
                  <Send />
                </div>
              </Tab>
              <Tab eventKey="transactions" title="Transactions">
                <div style={{ marginTop: '24px' }}>
                  <Transactions account={activeAccount} />
                </div>
              </Tab>
              <Tab eventKey="wallet" title="Wallet info">
                <div className="mt-5 pt-2">
                  <PrivateInfo
                    privateKey={activeAccount.privateKey}
                    address={activeAccount.address}
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 flex-column pl-md-4 pl-sm-3 pl-3 pt-md-0 pt-sm-2 pt-2">
        <div
          className={classNames(
            'content-card mt-md-0 mt-sm-4 mt-4',
            styles['balance-card'],
          )}
        >
          <Balance balance={activeAccount.balance} address={activeAccount.address} />
        </div>
        <div className={classNames('content-card', styles['token-card'])}>
          <Token />
        </div>
      </div>
    </div>
  );
};

export default connect((store) => ({
  wallet: store.wallet,
}))(Dashboard);
