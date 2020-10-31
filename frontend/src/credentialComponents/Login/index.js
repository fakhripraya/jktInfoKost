import React, { Component } from 'react'
import loginImg from './login.svg'
import {
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
    BtnSubmit,
    HyperText
} from './LoginElements'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { RESTAPIDOMAIN } from '../../config'

export default class index extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            open: false,
            username: '',
            password: '',
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

    onClick(e) {

        const userLogin = {
            username: this.state.username,
            password: this.state.password
        }

        let source = axios.CancelToken.source()

        axios.post('http://' + { RESTAPIDOMAIN } + '/auth/login', userLogin)
            .then(res => console.log(res.data))
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    // handle error
                    console.log(error);
                }
            });
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
                    Masuk
                </Header>
                <Content>
                    <ImageWrapper>
                        <Image src={loginImg} alt="" />
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
                    <BtnSubmit type="button" onClick={this.onClick}>Masuk</BtnSubmit>
                    <HyperText onClick={() => this.setState({ open: true })}> Lupa Kata Sandi?</HyperText>
                </Footer>
                <Dialog open={this.state.open} onClose={() => this.setState({ open: false })} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Atur ulang kata sandi</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Masukkan e-mail atau nomor hp yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email atau Nomer HP yang terdaftar"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({ open: false })} color="primary">
                            Batal
                        </Button>
                        <Button onClick={() => this.setState({ open: false })} color="primary">
                            Lanjut
                        </Button>
                    </DialogActions>
                </Dialog>
            </BaseContainer>
        )
    }
}
