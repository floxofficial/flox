import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styles from './styles.less';
import Send from './Send';

class Dashboard extends Component {
  render() {
    return (
      <div className="row mt-3 pt-2">
        <div className="col-7">
          <div className="content-card" style={{ padding: '13px 20.5px' }}>
            <div className={styles.tab}>
              <Tabs defaultActiveKey="send" id="tab">
                <Tab eventKey="send" title="Send">
                  <div style={{ marginTop: '54px' }}>
                    <Send />
                  </div>
                </Tab>
                <Tab eventKey="transactions" title="Transactions">
                  txn
                </Tab>
                <Tab eventKey="wallet" title="Wallet info">
                  wallet
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="col-5" />
      </div>
    );
  }
}

export default Dashboard;