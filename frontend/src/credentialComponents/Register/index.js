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

export default class index extends Component {

    constructor(props) {
        super(props);
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
            </BaseContainer>
        )
    }
}
