import React, {Component} from 'react';
import {Field, Form} from 'react-final-form';
import fs from 'fs';
import {remote} from 'electron';
import {connect} from 'react-redux';
import Button from 'Root/components/Button';
import Input from 'Root/components/Input';
import PrivateInfo from 'Root/Block/PrivateInfo';
import warning from 'Root/assets/images/warning.svg';
import ExportFile from 'Root/components/ExportFile';
import keystoreMaker from 'Root/helpers/keystore';
import styles from './styles.less';

class WalletPrivateInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
    }

    onSubmit(values) {
        this.setState({checked: true});
    }

    render() {
        const keystore = keystoreMaker(this.props.activeAccount, 'this.props.password');

        const { dialog } = remote;
        const currentWindow = remote.getCurrentWindow();
        return (
            <div className="row">
                <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
                    <div className={styles.msg}><img src={warning} alt="icon"/>
                        {this.state.checked ?
                            'Do not lose your private key! There is no way to recover lost keys.' :
                            'To see backup information (private key), please enter the password'
                        }

                    </div>
                    {this.state.checked ?
                        <div className={styles.container}>
                            <PrivateInfo activeAccount={this.props.activeAccount}/>
                            <div style={{paddingTop: '5px'}}>
                                <ExportFile
                                    text="Key store file"
                                    width={190}
                                    onClick={() => {
                                        dialog.showSaveDialog(currentWindow, options, (filename) => {
                                            fs.writeFileSync(filename, keystore, 'utf-8');
                                        });
                                    }}
                                />
                            </div>
                        </div> :
                        <Form
                            onSubmit={(values) => this.onSubmit(values)}
                            render={({submitError, handleSubmit, invalid, pristine, submitting}) => (
                                <form className={styles.container} onSubmit={handleSubmit}>
                                    <label className="label-primary">Password</label>
                                    <Field name="password">
                                        {({input, meta}) => (
                                            <Input
                                                type="password"
                                                placeholder="Enter your password here"
                                                variant="pass"
                                                input={input}
                                                meta={meta}
                                            />
                                        )}
                                    </Field>
                                    {submitError && <div className="error">{submitError}</div>}
                                    <Button
                                        type="submit"
                                        content="Show"
                                        variant="primary"
                                        size="104px"
                                        fontWeight={500}
                                        className="mt-4"
                                        disabled={invalid || pristine}
                                    />
                                </form>
                            )}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default connect((store) => ({
    wallet: store.wallet,
    password: store.password,
}))(WalletPrivateInfo);