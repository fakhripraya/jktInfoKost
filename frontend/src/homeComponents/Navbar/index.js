import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavLogoImg,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLinkMasuk,
    SpanMasuk,
    NavBtnLinkDaftar,
    NavBtnMobile,
    NavBtnLinkMobile,
    DrawerWrapper
} from './NavbarElements';
import {
    switchPage,
    unauthenticateUser
} from '../../services/redux'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LandscapeIcon from '@material-ui/icons/Landscape';
import HouseIcon from '@material-ui/icons/House';
import PhoneIcon from '@material-ui/icons/Phone';
import PolicyIcon from '@material-ui/icons/Policy';
import { trackPromise } from 'react-promise-tracker'
import axios from 'axios'
import { RESTAPIDOMAIN } from '../../config'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Navbar = () => {
    const isLoggedIn = useSelector(state => state.userDataReducer.isLoggedIn);
    const isPemilik = useSelector(state => state.userDataReducer.isPemilik);
    const dispatch = useDispatch()
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleHomePage = (value) => {
        dispatch(switchPage(value));
    };

    const handleLogout = () => {
        let source = axios.CancelToken.source()

        trackPromise(
            axios.get(RESTAPIDOMAIN + '/auth/logout', {
                cancelToken: source.token
            })
                .then(response => {
                    if (!response.data.error) {
                        dispatch(unauthenticateUser());
                    }
                    else {
                        console.log(response.data.error);
                    }
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        console.log('Request canceled', error.message);
                    } else {
                        console.log(error);
                    }
                }));
        return () => {
            //when the component unmounts
            console.log("component unmounted");
            // cancel the request (the message parameter is optional)
            source.cancel('Operation canceled by the user.');
        }
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const authButton = () => {
        if (isLoggedIn) {
            if (isPemilik) {
                return (
                    <NavBtn>
                        <NavBtnLinkDaftar onClick={() => handleLogout()}>Dashboard</NavBtnLinkDaftar>
                        <NavBtnLinkDaftar onClick={() => handleLogout()}>Keluar</NavBtnLinkDaftar>
                    </NavBtn>
                )
            }
            else {
                return (
                    <NavBtn>
                        <NavBtnLinkMasuk onClick={() => handleLogout()}><SpanMasuk>Daftar sebagai pemilik kost</SpanMasuk></NavBtnLinkMasuk>
                        <NavBtnLinkDaftar onClick={() => handleLogout()}>Dashboard</NavBtnLinkDaftar>
                        <NavBtnLinkDaftar onClick={() => handleLogout()}>Keluar</NavBtnLinkDaftar>
                    </NavBtn>
                )
            }

        }
        else {
            return (
                <NavBtn>
                    <NavBtnLinkMasuk to="/login"><SpanMasuk>Masuk</SpanMasuk></NavBtnLinkMasuk>
                    <NavBtnLinkDaftar to="/register">Daftar</NavBtnLinkDaftar>
                </NavBtn>
            )
        }
    };

    const list = (anchor) => (
        <DrawerWrapper
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Tanah Dijual', 'Sewaan', 'Hubungi Kami', 'Syarat dan Ketentuan'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {(() => {
                                switch (index) {
                                    case 0: return <LandscapeIcon />;
                                    case 1: return <HouseIcon />;
                                    case 2: return <PhoneIcon />;
                                    case 3: return <PolicyIcon />;
                                    default: return <LandscapeIcon />;
                                }
                            })()}
                        </ListItemIcon>
                        <ListItemText>
                            {(() => {
                                switch (index) {
                                    case 0: return <a href="!#" onClick={() => handleHomePage(1)}>{text}</a>;
                                    case 1: return <a href="!#" onClick={() => handleHomePage(2)}>{text}</a>;
                                    case 2: return <a href="!#" onClick={() => handleHomePage(3)}>{text}</a>;
                                    case 3: return <a href="!#" onClick={() => handleHomePage(4)}>{text}</a>;
                                    default: return <a href="!#" onClick={() => handleHomePage(1)}>{text}</a>;
                                }
                            })()}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <NavBtnMobile>
                <NavBtnLinkMobile to="/login">Masuk</NavBtnLinkMobile>
                <NavBtnLinkMobile to="/register">Daftar</NavBtnLinkMobile>
            </NavBtnMobile>
        </DrawerWrapper>
    );

    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={() => handleHomePage(0)} to='/'>
                        <NavLogoImg />
                    </NavLogo>
                    <MobileIcon>
                        <FaBars onClick={toggleDrawer('left', true)} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks onClick={() => handleHomePage(1)}>Tanah Dijual</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={() => handleHomePage(2)}>Sewaan</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={() => handleHomePage(3)}>Hubungi Kami</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={() => handleHomePage(4)}>Syarat dan Ketentuan</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLinkMasuk to="/login"><SpanMasuk>Masuk</SpanMasuk></NavBtnLinkMasuk>
                        <NavBtnLinkDaftar to="/register">Daftar</NavBtnLinkDaftar>
                    </NavBtn> */}
                    {authButton()}
                </NavbarContainer>
            </Nav>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </Fragment>
    )
}

export default Navbar
