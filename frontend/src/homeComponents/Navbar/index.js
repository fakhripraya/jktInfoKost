import React, { Fragment } from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinksDropdown,
    NavbarDropdownContent
} from './NavbarElements';

const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        JktInfoKost
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinksDropdown
                                to="/login">
                                Tanah jual
                                <FaCaretDown style={{ marginLeft: '3px' }} />
                                <NavbarDropdownContent>
                                    a
                                </NavbarDropdownContent>
                            </NavLinksDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLinksDropdown
                                to="/login">
                                Sewaan
                                <FaCaretDown style={{ marginLeft: '3px' }} />
                                <NavbarDropdownContent>
                                    a
                                </NavbarDropdownContent>
                            </NavLinksDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/login">Hubungi Kami</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/login">Syarat dan Ketentuan</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                        <NavBtnLink to="/register">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar
