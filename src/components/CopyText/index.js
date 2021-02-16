import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Tooltip } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './styles.less';

const CopyText = ({ icon, text, content }) => {
  const [show, setShow] = useState(false);
  const [tooltipText, setText] = useState('Copy to clipboard');
  const target = useRef(null);

  const toggle = () => {
    setText('Copied!');
    setShow(true);
  };

  return (
    <>
      <span
        ref={target}
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
          setText('Copy to clipboard');
        }}
        onClick={() => toggle()}
        className={styles.copy}
      >
        <CopyToClipboard text={text}>
          {icon ? <span className="icon-layer" style={{ marginLeft: '10px' }} /> : content}
        </CopyToClipboard>
      </span>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props} className="tooltip-copy">
            {tooltipText}
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

CopyText.defaultProps = {
  icon: false,
  content: '',
};

CopyText.propTypes = {
  icon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  content: PropTypes.any,
};

export default CopyText;
