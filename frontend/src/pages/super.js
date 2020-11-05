import React, { Fragment } from 'react'
import { animated, useTransition } from 'react-spring'
import Super from '../credentialComponents/Super'

function Login() {
    const transitions = useTransition(null, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 }
    })

    return transitions.map(({ key, props }) =>
        <animated.div key={key} style={props}>
            <Fragment>
                <Super />
            </Fragment>
        </animated.div>
    )
}

export default Login