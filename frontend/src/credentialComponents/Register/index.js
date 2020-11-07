import React, { Component } from 'react'
import loginImg from './register.svg'
import {
    BaseContainer,
    Header,
    Content,
    ImageWrapper,
    Image,
    Form,
    FormGroup,
    Label,
    CustomInput,
    Footer,
    BtnSubmit,
    SmallText,
    HyperText
} from './RegisterElements'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import { RESTAPIDOMAIN } from '../../config'
import { trackPromise } from 'react-promise-tracker';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            maxLength={6}
            isNumericString
        />
    );
}

export default class index extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmailorPhone = this.onChangeEmailorPhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeVerificationCode = this.onChangeVerificationCode.bind(this);
        this.onClickRegister = this.onClickRegister.bind(this);
        this.onClickVerification = this.onClickVerification.bind(this);

        this.state = {
            openVerifWindow: false,
            verificationCode: '',
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            passwordLevel: 0,
            errorFlag: false,
            errorMessage: '',
            warningFlag: false,
            warningMessage: '',
            warningType: 'warning',
            dialogFlag: false,
            dialogMessage: '',
            dialogSeverity: 'error'
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmailorPhone(e) {

        if (e.target.value.substring(0, 3) === '+62' || e.target.value.substring(0, 1) === '0') {
            if (e.target.value.length > 8) {
                if (e.target.value.includes('+62')) {
                    var subPhone = e.target.value.split('+', 2);
                    if (!isNaN(subPhone[1])) {
                        this.setState({
                            phone: e.target.value
                        });
                        return;
                    }
                }
                else {
                    if (!isNaN(e.target.value)) {
                        this.setState({
                            phone: e.target.value
                        });
                        return;
                    }
                }
            }
        }
        else if (e.target.value.includes('@') && e.target.value.lastIndexOf('@') > 0) {
            var email = e.target.value.split('@', 2);

            if (email[1].includes('.') && email[1].lastIndexOf('.') > 0) {
                var subEmail = email[1].split('.', 2);

                if (subEmail[1].length > 0 && subEmail[0].length > 0) {
                    this.setState({
                        email: e.target.value
                    });
                    return;
                }
            }
        }

        this.setState({
            phone: '',
            email: ''
        });
        return;
    }

    onChangePassword(e) {

        let PasswordLevel = 0;

        var backslash = new RegExp("\\\\", "");

        if (e.target.value.length > 6) {
            if ((backslash.test(e.target.value) || /[$-/:-@{-~!-#^_`[\]]/.test(e.target.value)) && /[a-zA-Z\s]+/.test(e.target.value)) {
                PasswordLevel = PasswordLevel + 1;
            }
            if (/\d/.test(e.target.value) && /[a-zA-Z\s]+/.test(e.target.value)) {
                PasswordLevel = PasswordLevel + 1;
            }
        }

        this.setState({
            password: e.target.value
        });

        if (e.target.value === '') {
            this.setState({
                warningFlag: false,
            });
        }
        else if (PasswordLevel === 0) {
            this.setState({
                warningFlag: true,
                warningMessage: 'Password anda sangat lemah.',
                warningType: 'error'
            });
        }
        else if (PasswordLevel === 1) {
            this.setState({
                warningFlag: true,
                warningMessage: 'Password anda lemah.',
                warningType: 'warning'
            });
        }
        else if (PasswordLevel === 2) {
            this.setState({
                warningFlag: true,
                warningMessage: 'Password anda kuat.',
                warningType: 'success'
            });
        }
    }

    onChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    onChangeVerificationCode(e) {
        this.setState({
            verificationCode: e.target.value
        });
    }

    onClickRegister(e) {
        if (this.state.verificationCode !== '') {
            this.setState({
                verificationCode: '',
            });
        }

        if (this.state.errorFlag === true) {
            this.setState({
                errorFlag: false,
                errorMessage: ''
            });
        }
        if (this.state.username === '') {
            this.setState({
                errorFlag: true,
                errorMessage: 'Nama user tidak boleh kosong'
            });
            return;
        }
        if (this.state.username.length < 8) {
            this.setState({
                errorFlag: true,
                errorMessage: 'Panjang nama user tidak boleh kurang dari 8 karakter'
            });
            return;
        }
        if (this.state.email === '' && this.state.phone === '') {

            this.setState({
                errorFlag: true,
                errorMessage: 'E-mail atau nomor hp tidak valid'
            });
            return;
        }
        if (this.state.password === '') {
            this.setState({
                errorFlag: true,
                errorMessage: 'Password tidak valid'
            });
            return;
        }
        if (this.state.confirmPassword !== this.state.password) {
            this.setState({
                errorFlag: true,
                errorMessage: 'Konfirmasi password tidak sesuai dengan password anda'
            });
            return;
        }

        if (this.state.warningFlag === true) {
            this.setState({
                warningFlag: false,
            });
        }

        const emailOrphone = {
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username
        }

        let source = axios.CancelToken.source()
        trackPromise(
            axios.post(RESTAPIDOMAIN + '/auth/verification', emailOrphone, {
                cancelToken: source.token
            })
                .then(response => {
                    if (response.data.message) {
                        this.setState({ openVerifWindow: true });
                    }
                    else {
                        this.setState({
                            dialogFlag: true,
                            dialogMessage: response.data.error,
                            dialogSeverity: 'error'
                        });
                    }
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

    onClickVerification(e) {

        const userInfo = {
            user: {
                email: this.state.email,
                phone: this.state.phone,
                username: this.state.username,
                password: this.state.password
            },
            verificationCode: this.state.verificationCode
        }

        const userLogin = {
            user: {
                username: this.state.username,
                password: this.state.password
            }
        }

        let source = axios.CancelToken.source()
        trackPromise(
            axios.post(RESTAPIDOMAIN + '/auth/register', userInfo, {
                cancelToken: source.token
            })
                .then(response => {
                    if (response.data.message) {
                        axios.all([
                            axios.post(RESTAPIDOMAIN + '/auth/login', userLogin, {
                                cancelToken: source.token
                            })
                        ])
                            .then(response => {
                                //this will be executed only when all requests are complete
                                if (response.data.message) {
                                    console.log(response.data.message);
                                    console.log('berhasil loggin');
                                }
                                else {
                                    this.setState({
                                        dialogFlag: true,
                                        dialogMessage: response.data.error,
                                        dialogSeverity: 'error'
                                    });
                                }
                            })
                            .catch(error => {
                                if (axios.isCancel(error)) {
                                    console.log('Request canceled', error.message);
                                } else {
                                    // handle error
                                    console.log(error);
                                }
                            })
                    }
                    else {
                        this.setState({
                            dialogFlag: true,
                            dialogMessage: response.data.error,
                            dialogSeverity: 'error'
                        });
                    }
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

    render() {
        return (
            <BaseContainer>

                <Header>
                    Daftar Sekarang
                </Header>
                <Content>
                    <ImageWrapper>
                        <Image src={loginImg} alt="register-page-img" />
                    </ImageWrapper>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="username" >Nama user</Label>
                            <CustomInput type="text" name="username" placeholder="nama user" onChange={this.onChangeUsername} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email" >Email atau nomor hp</Label>
                            <CustomInput type="text" name="emailOrHp" placeholder="email atau nomer hp" onChange={this.onChangeEmailorPhone} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password" >Kata sandi</Label>
                            <CustomInput type="password" name="password" placeholder="kata sandi" onChange={this.onChangePassword} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="confirmPassword" >Konfirmasi kata sandi</Label>
                            <CustomInput type="password" name="confirmPassword" placeholder="konfirmasi kata sandi" onChange={this.onChangeConfirmPassword} />
                        </FormGroup>
                    </Form>
                </Content>
                <Footer>
                    <Collapse in={this.state.warningFlag}>
                        <Alert
                            style={{ marginBottom: '20px', minWidth: '22em' }}
                            severity={this.state.warningType}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => this.setState({ warningFlag: false })}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {this.state.warningMessage}
                        </Alert>
                    </Collapse>
                    <Collapse in={this.state.errorFlag}>
                        <Alert
                            style={{ marginBottom: '20px', minWidth: '22em' }}
                            severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => this.setState({ errorFlag: false })}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {this.state.errorMessage}
                        </Alert>
                    </Collapse>
                    <BtnSubmit type="button" onClick={this.onClickRegister}>Daftar</BtnSubmit>
                    <SmallText>
                        Dengan mendaftar, saya menyetujui
                        <HyperText> Syarat dan Ketentuan</HyperText> serta
                        <HyperText> Kebijakan Privasi</HyperText>
                    </SmallText>
                </Footer>

                {/* Verif Dialog */}
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.openVerifWindow} onClose={() => this.setState({ openVerifWindow: false })} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Verifikasi kode registrasi</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Masukkan kode verifikasi yang telah kami kirim ke e-mail atau nomor hp anda.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            value={this.state.verificationCode}
                            margin="dense"
                            id="verif-text-field-register"
                            label="Kode verifikasi"
                            type="text"
                            onChange={this.onChangeVerificationCode}
                            InputProps={{
                                inputComponent: NumberFormatCustom,
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({ openVerifWindow: false })} color="primary">
                            Batal
                        </Button>
                        <Button onClick={this.onClickVerification} color="primary">
                            Lanjut
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Message Dialog */}
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.dialogFlag} onClose={() => this.setState({ dialogFlag: false })} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <Alert
                            style={{ marginBottom: '20px', minWidth: '22em' }}
                            severity={this.state.dialogSeverity}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => this.setState({
                                        dialogFlag: false
                                    })}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {this.state.dialogMessage}
                        </Alert>
                    </DialogContent>
                </Dialog>

            </BaseContainer>
        )
    }
}
