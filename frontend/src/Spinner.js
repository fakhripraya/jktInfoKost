import React from 'react';
import { animated, useTransition } from 'react-spring'

const Spinner = () => {
    const transitions = useTransition(null, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 3000 }
    })
    return transitions.map(({ key, props }) =>
        <animated.div key={key} style={props}>
            <div>
                test
            </div>
        </animated.div>
    )
}

export default Spinner;
