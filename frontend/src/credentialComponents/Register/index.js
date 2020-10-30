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
    BtnSubmit
} from './RegisterElements'

export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseContainer>
                <Header>
                    Sign Up
                </Header>
                <Content>
                    <ImageWrapper>
                        <Image src={loginImg} alt="" />
                    </ImageWrapper>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="username" >Username</Label>
                            <Input type="text" name="username" placeholder="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email" >Email</Label>
                            <Input type="email" name="email" placeholder="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password" >Password</Label>
                            <Input type="password" name="password" placeholder="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="confirmPassword" >Username</Label>
                            <Input type="password" name="confirmPassword" placeholder="confirm password" />
                        </FormGroup>
                    </Form>
                </Content>
                <Footer>
                    <BtnSubmit type="button" >Sign Up</BtnSubmit>
                </Footer>
            </BaseContainer>
        )
    }
}
