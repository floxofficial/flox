import React, { Component } from 'react';
import Title from 'Root/components/Title';
import FileUpload from 'Root/components/FileUpload';
import styles from './styles.less';

class KeyStore extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-11">
          <Title text="Unlock with keystore file" mt={48} link="/" />
          <div className={styles.upload}>
            <FileUpload />
          </div>
        </div>
      </div>
    );
  }
}

export default KeyStore;
