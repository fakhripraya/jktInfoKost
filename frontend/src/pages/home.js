import React, { Fragment } from 'react'
import Navbar from '../homeComponents/Navbar'
import MainBody from '../homeComponents/Main/MainBody'
import Footer from '../homeComponents/Footer'
import { animated, useTransition } from 'react-spring'
import Background from '../homeComponents/Background'

function Home() {
    const transitions = useTransition(null, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 }
    })

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
