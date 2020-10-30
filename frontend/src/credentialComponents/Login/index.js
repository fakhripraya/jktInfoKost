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
    BtnSubmit
} from './LoginElements'

export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseContainer>
                <Header>
                    Sign In
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
                            <Label htmlFor="password" >Password</Label>
                            <Input type="password" name="password" placeholder="password" />
                        </FormGroup>
                    </Form>
                </Content>
                <Footer>
                    <BtnSubmit type="button" >Sign In</BtnSubmit>
                </Footer>
            </BaseContainer>
        )
    }
}
