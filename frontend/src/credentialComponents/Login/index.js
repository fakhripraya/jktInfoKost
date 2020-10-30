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

export default class index extends Component {

    constructor(props) {
        super(props);
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
                            <Input type="text" name="username" placeholder="nama user" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password" >Kata sandi</Label>
                            <Input type="password" name="password" placeholder="kata sandi" />
                        </FormGroup>
                    </Form>
                </Content>
                <Footer>
                    <BtnSubmit type="button" >Masuk</BtnSubmit>
                    <HyperText href="/login"> Lupa Kata Sandi?</HyperText>
                </Footer>
            </BaseContainer>
        )
    }
}
