import React from 'react';
import shortid from 'shortid';
import classNames from 'classnames';
import { connect } from 'react-redux';

// import defaultImage from 'Root/assets/images/tokens/default.png';
// import cBAND from 'Root/assets/images/tokens/cBAND.png';
// import cBNB from 'Root/assets/images/tokens/cBNB.png';
// import cBTC from 'Root/assets/images/tokens/cBTC.png';
// import cCOMP from 'Root/assets/images/tokens/cCOMP.png';
// import cDAI from 'Root/assets/images/tokens/cDAI.png';
// import cDF from 'Root/assets/images/tokens/cDF.png';
// import cETH from 'Root/assets/images/tokens/cETH.png';
// import cFLUX from 'Root/assets/images/tokens/cFLUX.png';
// import cFOR from 'Root/assets/images/tokens/cFOR.png';
// import cITF from 'Root/assets/images/tokens/cITF.png';
// import cKP3R from 'Root/assets/images/tokens/cKP3R.png';
// import cLEND from 'Root/assets/images/tokens/cLEND.png';
// import cLINK from 'Root/assets/images/tokens/cLINK.png';
// import cMBTM from 'Root/assets/images/tokens/cMBTM.png';
// import cMOON from 'Root/assets/images/tokens/cMOON.png';
// import cSNX from 'Root/assets/images/tokens/cSNX.png';
// import csUSD from 'Root/assets/images/tokens/csUSD.png';
// import cSWRV from 'Root/assets/images/tokens/cSWRV.png';
// import cUMA from 'Root/assets/images/tokens/cUMA.png';
// import cUSDT from 'Root/assets/images/tokens/cUSDT.png';
// import cUSDC from 'Root/assets/images/tokens/cUSDC.png';
// import cYFI from 'Root/assets/images/tokens/cYFI.png';
// import cYFII from 'Root/assets/images/tokens/cYFII.png';
// import FC from 'Root/assets/images/tokens/FC.png';
// import TREA from 'Root/assets/images/tokens/TREA.png';

import bigIntToNumber from 'Root/helpers/bigIntToNumber';

import styles from './styles.less';

// const tokensObject = {
//   cBAND,
//   cBNB,
//   cBTC,
//   cCOMP,
//   cDAI,
//   cDF,
//   cETH,
//   cFLUX,
//   cFOR,
//   cITF,
//   cKP3R,
//   cLEND,
//   cLINK,
//   cMBTM,
//   cMOON,
//   cSNX,
//   csUSD,
//   cSWRV,
//   cUMA,
//   cUSDT,
//   cUSDC,
//   cYFI,
//   cYFII,
//   FC,
//   TREA,
// };

const Token = ({ tokens }) => {
  const filteredTokens = tokens.filter((x) => x.balance != 0);

  return (
    <div>
      <h6 className={styles.title}>Tokens</h6>
      <div
        className={
          tokens && tokens.length > 6 ? classNames('hidden-scroll', styles.scroll) : ''
        }
      >
        {filteredTokens.map((token) => (
          <div className={styles.box} key={shortid.generate()}>
            <div className="row justify-content-between" key={shortid.generate()}>
              {/* <div className={classNames('col-auto', styles.imgContainer)}>
                <img
                  src={
                    tokensObject[token.symbol] ? tokensObject[token.symbol] : defaultImage
                  }
                  alt="img"
                />
              </div> */}
              <div className={classNames('col-auto', styles.name)}>
                {/* {token.name.length > 10 ? `${token.name.slice(0, 10)}...` : token.name}( */}
                {token.symbol}
                {/* ) */}
              </div>

              <div className={classNames('col-auto', styles.value)}>
                {bigIntToNumber(token.balance)}
                {/* &nbsp;
                {token.price
                  ? `$${parseFloat(token.price) * bigIntToNumber(token.balance)}`
                  : ''} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect((store) => ({
  tokens: store.tokens,
}))(Token);
