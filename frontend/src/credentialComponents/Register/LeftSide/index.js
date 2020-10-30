import React, { Component } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import {
    BaseContainer,
    Header,
    Content,
    BtnGoogle,
    BtnFacebook,
    BtnRedirect
} from './SideElements'

export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseContainer>
                <Content>
                    <Header>
                        Atau Dengan
                    </Header>
                    <BtnGoogle type="button" >
                        <p style={{ color: "black" }}>
                            <FaGoogle />
                            oogle
                        </p>
                    </BtnGoogle>
                    <BtnFacebook type="button" >
                        <p>
                            <FaFacebook />
                            acebook
                        </p>
                    </BtnFacebook>
                    <BtnRedirect to="/register" >Sign Up</BtnRedirect>
                </Content>
            </BaseContainer>
        )
    }
}
