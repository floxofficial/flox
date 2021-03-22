import { shell } from 'electron';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from 'Root/components/Table';
import shorter from 'Root/helpers/shorter';
import currentExplorer from 'Root/helpers/currentExplorer';
import Button from '../../../../components/Button';

const head = ['Txid', 'Amount', 'Time', 'Type', 'Status'];

const Rows = (transactions) => {
  return transactions.map((row) => (
    <tr key={shortid.generate()}>
      <td>
        <Link
          onClick={() => {
            shell.openExternal(`${currentExplorer()}/transaction/${row.hash}`);
          }}
        >
          {shorter(row.hash)}
        </Link>
      </td>
      <td>{row.value}</td>
      <td>{row.timestamp}</td>
      <td>Transfer</td>
      <td>
        <div className="td-status td-success">Success</div>
      </td>
    </tr>
  ));
};

class Transactions extends Component {
  render() {
    return (
      <div>
        <Table tableRows={Rows(this.props.transactions)} tableHead={head} />
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
      </div>
    );
  }
}

export default connect((state) => ({
  wallet: state.wallet,
  transactions: state.transactions,
}))(Transactions);
