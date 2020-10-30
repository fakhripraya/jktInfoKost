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
    SmallText
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
                            <Label htmlFor="email" >Email</Label>
                            <Input type="email" name="email" placeholder="email" />
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
                        <a href="/login"> Syarat dan Ketentuan</a> serta
                        <a href="/login"> Kebijakan Privasi</a>
                    </SmallText>
                </Footer>
            </BaseContainer>
        )
    }
}
