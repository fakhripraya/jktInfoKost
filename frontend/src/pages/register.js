import React, { Fragment } from 'react'
import { animated, useTransition } from 'react-spring'
import MainBody from '../credentialComponents/Register/MainBody'

function Register() {
    const transitions = useTransition(null, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 }
    })

    return transitions.map(({ key, props }) =>
        <animated.div key={key} style={props}>
            <Fragment>
                <MainBody />
            </Fragment>
        </animated.div>
    )
}

export default Register