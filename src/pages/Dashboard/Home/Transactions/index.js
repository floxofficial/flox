import { shell } from 'electron';
import shortid from 'shortid';
import moment from 'moment';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from 'Root/components/Table';
import shorter from 'Root/helpers/shorter';
import currentExplorer from 'Root/helpers/currentExplorer';
import stringNumberToNumber from 'Root/helpers/stringNumberToNumber';
import Button from '../../../../components/Button';

const head = ['Txid', 'Amount', 'Time', 'Type', 'Status'];

const Rows = (transactions) => {
  return transactions.map((row) => (
    <tr key={shortid.generate()}>
      <td>
        <Link
          to="#"
          onClick={() => {
            shell.openExternal(`${currentExplorer()}/transaction/${row.hash}`);
          }}
        >
          {shorter(row.hash)}
        </Link>
      </td>
      <td>{stringNumberToNumber(row.value)}</td>
      <td>{moment(row.timestamp * 1000).fromNow()}</td>
      <td>Transfer</td>
      <td>
        {row.status === 0 ? (
          <div className="td-status td-success">Success</div>
        ) : (
          <div className="td-status td-warn">Failed</div>
        )}
      </td>
    </tr>
  ));
};

class Transactions extends Component {
  render() {
    return (
      <div>
        <Table
          tableRows={Rows(this.props.transactions)}
          tableHead={head}
          transactions={this.props.transactions}
        />
        {this.props.transactions.length ? (
          <Button
            content="View All Transactions"
            variant="outline"
            fontSize={14}
            fontWeight={500}
            size="100%"
            onClick={() => {
              shell.openExternal(
                `${currentExplorer()}/address/${this.props.wallet[0].address}`,
              );
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default connect((state) => ({
  wallet: state.wallet,
  transactions: state.transactions,
}))(Transactions);
