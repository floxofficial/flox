import React, { Component } from 'react';
import Title from 'Root/components/Title';
import {Link} from "react-router-dom";
import styles from './styles.less';

class CreateWallet extends Component {
  render() {
    return (
      <div>
        <Title text="Create a new wallet" />
        <Link to="/">back</Link>
      </div>
    );
  }
}

export default CreateWallet;
