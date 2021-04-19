import React from 'react';
import logo256 from 'Root/assets/images/Flox - logo motion - 256x256.gif';
import logo128 from 'Root/assets/images/Flox - logo motion - 128x128.gif';
import styles from './styles.less';

const Loading = () => (
  <div className={styles.container}>
    <img src={logo128} alt="loading" />
  </div>
);

export default Loading;
