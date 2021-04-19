import React from 'react';
import classNames from 'classnames';
import LogoMotion from 'Root/components/LogoMotion';
import styles from './styles.less';

const Loading = ({ size = 128, isFull }) => (
  <div className={classNames(styles.container, isFull && styles.position)}>
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      <LogoMotion />
    </div>
  </div>
);

export default Loading;
