import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.less';

const Token = ({ tokens }) => (
  <div>
    <h6 className={styles.title}>Tokens</h6>
    <div className={tokens && tokens.length > 6 && classNames('hidden-scroll', styles.scroll)}>
      {tokens.map((token, index) => (
        <div className={styles.box} key={index}>
          <div className="row justify-content-between" key={index}>
            <div className={classNames('col-auto', styles.name)}>{token.name}</div>
            <div className={classNames('col-auto', styles.value)}>{token.value}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Token.propTypes = {
  tokens: PropTypes.array.isRequired,
};

export default Token;
