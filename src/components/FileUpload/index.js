import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';
import Button from 'Root/components/Button';
import styles from './styles.less';

const FileUpload = ({ setFile }) => {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  useEffect(() => {
    const reader = new FileReader();

    reader.onload = () => {
      // Do whatever you want with the file contents
      let content = reader.result;
      let hasError = false;

      try {
        const jsonFile = JSON.parse(content);

        if (!jsonFile.version || !jsonFile.address || !jsonFile.crypto) {
          setError('Invalid keystore file');
          hasError = true;
        } else {
          content = jsonFile;
        }
      } catch (e) {
        setError('Invalid keystore file');
        hasError = true;
      }

      setFile({
        hasError,
        file: acceptedFiles[0],
        content,
      });

      setFileName(acceptedFiles[0] && acceptedFiles[0].name);
    };

    if (acceptedFiles[0]) {
      reader.readAsText(acceptedFiles[0]);
    }
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
          {error ? (
            <p className={styles.message}>
              <span className="icon-multiply" />
              Invalid keystore
            </p>
          ) : (
            <p className={styles.message}>
              <span className="icon-correct-circle" />
              Your Wallet is successfully encrypted
            </p>
          )}
        </>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  setFile: PropTypes.func.isRequired,
};

export default FileUpload;
