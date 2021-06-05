import React from 'react';

import config from 'Root/config';

import styles from './styles.less';

const Footer = () => (
  <h6 className={styles.footer}>
    Version &nbsp;
    {config.VERSION}
  </h6>
);

export default Footer;
