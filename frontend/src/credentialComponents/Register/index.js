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
    Input,
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

export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openVerifWindow: false,
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        };
    }

    render() {
        return (
            <BaseContainer>
                <Header>
                    Daftar Sekarang
                </Header>
                <Content>
                    <ImageWrapper>
                        <Image src={loginImg} alt="" />
                    </ImageWrapper>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="username" >Nama user</Label>
                            <Input type="text" name="username" placeholder="nama user" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email" >Email atau Nomer HP</Label>
                            <Input type="text" name="emailOrHp" placeholder="email atau nomer hp" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password" >Kata sandi</Label>
                            <Input type="password" name="password" placeholder="kata sandi" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="confirmPassword" >Konfirmasi kata sandi</Label>
                            <Input type="password" name="confirmPassword" placeholder="konfirmasi kata sandi" />
                        </FormGroup>
                    </Form>
                </Content>
                <Footer>
                    <BtnSubmit type="button" >Daftar</BtnSubmit>
                    <SmallText>
                        Dengan mendaftar, saya menyetujui
                        <HyperText> Syarat dan Ketentuan</HyperText> serta
                        <HyperText> Kebijakan Privasi</HyperText>
                    </SmallText>
                </Footer>

                {/* Verif Dialog */}
                <Dialog open={this.state.openVerifWindow} onClose={() => this.setState({ openVerifWindow: false })} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Atur ulang kata sandi</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Masukkan e-mail atau nomor hp yang anda daftarkan. Kami akan mengirimkan kode verifikasi.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="verif-text-field-login"
                            label="Email atau Nomer HP yang terdaftar"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({ openVerifWindow: false })} color="primary">
                            Batal
                        </Button>
                        <Button onClick={() => this.setState({ openVerifWindow: false })} color="primary">
                            Lanjut
                        </Button>
                    </DialogActions>
                </Dialog>
            </BaseContainer>
        )
    }
}
