import React from 'react';

const TheHome = React.lazy(() => {
    return Promise.all([
        import('../pages/home'),
        new Promise(resolve => setTimeout(resolve, 0))
    ])
        .then(([moduleExports]) => moduleExports);
});

const TheDashboard = React.lazy(() => {
    return Promise.all([
        import('../pages/dashboard'),
        new Promise(resolve => setTimeout(resolve, 0))
    ])
        .then(([moduleExports]) => moduleExports);
});

const TheLogin = React.lazy(() => {
    return Promise.all([
        import('../pages/login'),
        new Promise(resolve => setTimeout(resolve, 0))
    ])
        .then(([moduleExports]) => moduleExports);
});

const TheRegister = React.lazy(() => {
    return Promise.all([
        import('../pages/register'),
        new Promise(resolve => setTimeout(resolve, 0))
    ])
        .then(([moduleExports]) => moduleExports);
});

const TheSuper = React.lazy(() => {
    return Promise.all([
        import('../pages/super'),
        new Promise(resolve => setTimeout(resolve, 0))
    ])
        .then(([moduleExports]) => moduleExports);
});

export {
    TheHome,
    TheDashboard,
    TheLogin,
    TheRegister,
    TheSuper
}
