import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';
import Button from 'Root/components/Button';
import styles from './styles.less';

const FileUpload = (props) => {
  const {
    getRootProps, getInputProps, open, acceptedFiles,
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
      {' '}
      -
      {file.size}
      {' '}
      bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Button
          onClick={open}
          variant="primary"
          fontWeight={500}
          size="100%"
        >
          <span className={classNames('icon-upload', styles.icon)} />Select Wallet File
        </Button>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
};

FileUpload.propTypes = {

};

export default FileUpload;
