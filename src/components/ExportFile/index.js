import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles.less";

const ExportFile = ({onClick, text, width}) => {
    return (
        <div>
            <a className={styles.download} onClick={onClick} style={{width: `${width}px`}}>
                <div className={styles['download-text']}>{text}</div>
                <div className="icon-upload" />
            </a>
        </div>
    );
};

ExportFile.propTypes = {

};

export default ExportFile;