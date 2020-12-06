import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import classNames from 'classnames';
import PrivateInfo from 'Root/Block/PrivateInfo';
import Send from './Send';
import Transactions from './Transactions';
import Balance from './Balance';
import Token from './Token';
import styles from './styles.less';

const tokens = [
  { name: 'FCI', value: '2.34' },
  { name: 'LOO', value: '0.01992' },
  { name: 'SMO', value: '0.003622' },
  { name: 'FCI', value: '2.34' },
  { name: 'LOO', value: '0.01992' },
  { name: 'SMO', value: '0.003622' },
];

class Dashboard extends Component {
  render() {
    const address = '0x115fcce25b23b7341c6b4da4ce04c43886f0acd2';
    const key = '0x4b8276fc8003a89fe2a0ad9de26ca82c2e26cb3339877b487662bd7219797a9e';
    const balance = '0.22345';
    return (
      <div className="row mt-3 pt-2">
        <div className="col-7">
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
                    <Transactions />
                  </div>
                </Tab>
                <Tab eventKey="wallet" title="Wallet info">
                  <div className="mt-5 pt-2">
                    <PrivateInfo privateKey={key} address={address} />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="col-5 flex-column">
          <div className={classNames('content-card', styles['balance-card'])}>
            <Balance balance={balance} address={address} />
          </div>
          <div className={classNames('content-card', styles['token-card'])}>
            <Token tokens={tokens} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
