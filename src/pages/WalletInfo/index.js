import React, { Component } from 'react';
import { remote } from 'electron';
import fs from 'fs';
import Title from 'Root/components/Title';
import Button from 'Root/components/Button';
import PrivateInfo from 'Root/Block/PrivateInfo';
import styles from './styles.less';

class WalletInfo extends Component {
  render() {
    const address = '0x115fcce25b23b7341c6b4da4ce04c43886f0acd2';
    const key = '0x4b8276fc8003a89fe2a0ad9de26ca82c2e26cb3339877b487662bd7219797a9e';
    const { dialog } = remote;
    const WIN = remote.getCurrentWindow();
    const options = {
      title: 'Save file',
      defaultPath: 'C:\\logo.png',
      buttonLabel: 'Save key File',
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] },
      ],
    };

    return (
      <div className="row justify-content-around">
        <div className="col-xl-8 col-lg-6 col-md-8 col-sm-10 col-11 px-4">
          <Title text="Your wallet info" mt={48} />
          <p className={styles.message}>
            Do not lose your private key! There is no way to recover lost keys.
          </p>
          <div className="mt-5">
            <PrivateInfo privateKey={key} address={address} />
          </div>
          <a
            className={styles.download}
            onClick={() => {
              dialog.showSaveDialog(WIN, options, (filename) => {
                console.log(filename);
                fs.writeFileSync(filename, 'hello world', 'utf-8');
              });
            }}
          >
            <div className={styles['download-text']}>Download Keystore file</div>
            <div className="icon-upload" />
          </a>
          <Button variant="primary" content="Continue" size="118px" />
        </div>
      </div>
    );
  }
}

export default WalletInfo;
