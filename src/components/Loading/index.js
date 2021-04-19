import React from 'react';
import classNames from 'classnames';
import logo256 from 'Root/assets/images/Flox - logo motion - 256x256.gif';
import logo128 from 'Root/assets/images/Flox - logo motion - 128x128.gif';
import styles from './styles.less';

const Loading = ({ size = 128, isFull }) => (
  <div className={classNames(styles.container, isFull && styles.position)}>
    <img src={logo128} alt="loading" height={size} width={size} />
  </div>
);

export default Loading;
