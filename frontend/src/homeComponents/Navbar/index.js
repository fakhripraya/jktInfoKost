import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
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
    NavBtnLink,
    NavBtnMobile,
    NavBtnLinkMobile,
    DrawerWrapper
} from './NavbarElements';
import {
    switchPage
} from '../../services/redux/home_state/actions'
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

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Navbar = () => {

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

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
                <NavBtnLinkMobile to="/login">Sign In</NavBtnLinkMobile>
                <NavBtnLinkMobile to="/register">Sign Up</NavBtnLinkMobile>
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
                    <NavBtn>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                        <NavBtnLink to="/register">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </Fragment>
    )
}

export default Navbar
