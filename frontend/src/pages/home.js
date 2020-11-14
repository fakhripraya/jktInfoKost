import React, { Fragment, useEffect } from 'react'
import Navbar from '../homeComponents/Navbar'
import MainBody from '../homeComponents/Main/MainBody'
import Footer from '../homeComponents/Footer'
import { animated, useTransition } from 'react-spring'
import Background from '../homeComponents/Background'
import axios from 'axios'
import {
    authenticateUser,
    unauthenticateUser
} from '../services/redux'
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.userDataReducer.isLoggedIn);

    const transitions = useTransition(null, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 }
    })

    useEffect(() => {
        let source = axios.CancelToken.source()
        if (isLoggedIn === false) {
            axios.get('http://localhost:5000/user/', {
                cancelToken: source.token
            })
                .then(response => {
                    if (response.data.user !== null) {
                        const user = response.data.user;
                        console.log(user)
                        dispatch(authenticateUser({ user }));
                    }
                    else {
                        console.log('unauthenticated')
                        dispatch(unauthenticateUser);
                    }
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        console.log('Request canceled', error.message);
                    } else {
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
    });

    return transitions.map(({ key, props }) =>
        <animated.div key={key} style={props}>
            <Fragment>
                <Background />
                <Navbar />
                <MainBody />
                <Footer />
            </Fragment>
        </animated.div>
    )
}

export default Home
