import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.less';

const Table = ({ tableHead, tableRows, transactions }) => (
  <>
    {transactions.length ? (
      <div className={classNames(styles.card, 'table-scroll')}>
        <table className={classNames('table', styles.table)}>
          <thead>
            <tr>
              {tableHead.map((head, index) => (
                <th key={index} scope="col">
                  {head && head.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    ) : (
      <div className="child-position-center">You have no transactions</div>
    )}
  </>
);

Table.propTypes = {
  tableHead: PropTypes.array.isRequired,
  tableRows: PropTypes.array.isRequired,
};

export default Table;
