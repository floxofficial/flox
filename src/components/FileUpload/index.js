import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';
import Button from 'Root/components/Button';
import styles from './styles.less';

const FileUpload = ({ setFile }) => {
  const [fileName, setFileName] = useState('');
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  useEffect(() => {
    setFileName(acceptedFiles[0] && acceptedFiles[0].name);
    setFile(acceptedFiles[0]);
  }, [acceptedFiles]);

  const files = acceptedFiles.map((file) => (
    <div key="image" className={styles.info}>
      {file.name}
    </div>
  ));

  return (
    <div>
      {!fileName ? (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Button onClick={open} variant="primary" fontWeight={500} size="100%">
            <span className={classNames('icon-upload', styles.icon)} />
            Select Wallet File
          </Button>
        </div>
      ) : (
        <>
          <div>{files}</div>
          <p className={styles.message}>
            <span className="icon-correct-circle" />
            Your Wallet is successfully encrypted
          </p>
        </>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  setFile: PropTypes.func.isRequired,
};

export default FileUpload;
