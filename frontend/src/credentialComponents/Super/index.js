import React, { Component } from 'react'
import loginImg from './login.svg'
import {
    SuperContainer,
    BaseContainer,
    Header,
    Content,
    ImageWrapper,
    Image,
    Form,
    FormGroup,
    Label,
    Input,
    Footer,
    BtnSubmit
} from './SuperElements'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { RESTAPIDOMAIN } from '../../config'
import { QRCode } from "react-qr-svg";
import { trackPromise } from 'react-promise-tracker';

export default class index extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onCloseWindow = this.onCloseWindow.bind(this);

        this.state = {
            username: '',
            password: '',
            Data: '',
            openWindow: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onClickLogin(e) {

        const userLogin = {
            username: this.state.username,
            password: this.state.password
        }

        let source = axios.CancelToken.source()
        trackPromise(
            axios.post(RESTAPIDOMAIN + '/papi/su/log/qr', userLogin, {
                cancelToken: source.token
            })
                .then(response => {
                    console.log(response.data)
                    this.setState({ Data: response.data.message });
                    this.setState({ openWindow: true });
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        console.log('Request canceled', error.message);
                    } else {
                        // handle error
                        console.log(error);
                    }
                }));
        return () => {
            //when the component unmounts
            console.log("component unmounted");
            // cancel the request (the message parameter is optional)
            source.cancel('Operation canceled by the user.');
        }
    }

    onCloseWindow(e) {
        this.setState({ Data: '' });
        this.setState({ openWindow: false })
    }

    render() {
        return (
            <SuperContainer>
                <BaseContainer>
                    <Header>
                        Masuk
                </Header>
                    <Content>
                        <ImageWrapper>
                            <Image src={loginImg} alt="login-page-img" />
                        </ImageWrapper>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username" >Nama User</Label>
                                <Input type="text" name="username" placeholder="nama user" onChange={this.onChangeUsername} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" >Kata sandi</Label>
                                <Input type="password" name="password" placeholder="kata sandi" onChange={this.onChangePassword} />
                            </FormGroup>
                        </Form>
                    </Content>
                    <Footer>
                        <BtnSubmit type="button" onClick={this.onClickLogin}>Masuk</BtnSubmit>
                    </Footer>

                    {/* QR */}
                    <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.openWindow} onClose={this.onCloseWindow} aria-labelledby="form-dialog-title">
                        <DialogContent>
                            <QRCode
                                bgColor="#FFFFFF"
                                fgColor="#000000"
                                level="Q"
                                style={{ width: 256 }}
                                value={this.state.Data}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.onCloseWindow} color="primary">
                                Exit
                        </Button>
                        </DialogActions>
                    </Dialog>
                </BaseContainer>
            </SuperContainer>
        )
    }
}
