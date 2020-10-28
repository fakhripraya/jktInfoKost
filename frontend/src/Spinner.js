import React from 'react';
import { animated, useTransition } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
}));

const Spinner = () => {
    const classes = useStyles();
    const transitions = useTransition(null, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 }
    })
    return transitions.map(({ key, props }) =>
        <animated.div key={key} style={props}>
            <div className={classes.root}>
                <CircularProgress />
            </div>
        </animated.div>
    )
}

export default Spinner;
