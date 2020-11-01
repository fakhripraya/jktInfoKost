import React, { Component } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import {
    BaseContainer,
    Header,
    Content,
    BtnGoogle,
    BtnFacebook,
    BtnRedirect,
    SmallText
} from './SideElements'
import axios from 'axios'
import { RESTAPIDOMAIN } from '../../../config'

export default class index extends Component {

    constructor(props) {
        super(props);

        this.onClickGoogle = this.onClickGoogle.bind(this);
        this.onClickFacebook = this.onClickFacebook.bind(this);
    }

    onClickGoogle(e) {
        let source = axios.CancelToken.source()

        axios.get(RESTAPIDOMAIN + '/auth/google')
            .then(response => {
                window.location.href = response.data;
            })
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

    onClickFacebook(e) {
        let source = axios.CancelToken.source()

        axios.get(RESTAPIDOMAIN + '/auth/facebook')
            .then(res =>
                console.log(res.data)
            )
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
                <Content>
                    <Header>
                        Atau Dengan
                    </Header>
                    <BtnGoogle type="button" onClick={this.onClickGoogle}>
                        <p style={{ color: "black" }}>
                            <FaGoogle />
                            oogle
                        </p>
                    </BtnGoogle>
                    <BtnFacebook type="button" onClick={this.onClickFacebook}>
                        <p>
                            <FaFacebook />
                            acebook
                        </p>
                    </BtnFacebook>
                    <SmallText>
                        belum punya akun?
                    </SmallText>
                    <BtnRedirect to="/register" >Daftar</BtnRedirect>
                </Content>
            </BaseContainer>
        )
    }
}
