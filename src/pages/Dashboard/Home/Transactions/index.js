import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from 'Root/components/Table';
import Button from '../../../../components/Button';

const head = ['Txid', 'Amount', 'Time', 'Type', 'Status'];

const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, index) => (
  <tr key={index}>
    <td><Link to="/">0x4b82…721979</Link></td>
    <td>+2CFX</td>
    <td>1 Days ago</td>
    <td>Transfer</td>
    <td><div className="td-status td-success">Success</div></td>
  </tr>
));

class Transactions extends Component {
  render() {
    return (
      <div>
        <Table
          tableRows={rows}
          tableHead={head}
        />
        <Button
          content="View All Transactions"
          variant="outline"
          fontSize={14}
          fontWeight={500}
          size="100%"
        />
      </div>
    );
  }
}

Transactions.propTypes = {};

export default Transactions;
