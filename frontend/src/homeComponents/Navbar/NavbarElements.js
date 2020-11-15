import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoIcon from '../../images/Papi_Kost_3.png'

/*---------------------------------------------------UPPER NAV---------------------------------------------------*/

export const UpperNav = styled.nav`
    background: #fff;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    border-bottom: solid 1.1px rgba(0,0,0,0.3);
    width: 100%;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1260px){
        display: none;
    }
`

export const UpperNavRightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 2000px;
`

export const UpperNavRight = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1260px){
        display: none;
    }
`

export const UpperDisplayName = styled.p`
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
`

/*---------------------------------------------------END OF UPPER NAV---------------------------------------------------*/



/*---------------------------------------------------LOWER NAV---------------------------------------------------*/

export const Nav = styled.nav`
    background: #fff;
    /* height: 130px; */
    height: ${({ isLoggedIn }) => (isLoggedIn ? '130px' : '80px')};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: solid 1.1px rgba(0,0,0,0.3);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 1260px){
        height: 80px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 2000px;
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    max-width: 230px;
`

export const NavLogoImg = styled.img`
    width: 100%;
`
NavLogoImg.defaultProps = {
    src: LogoIcon,
};

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 1260px){
        color: #000;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 50px;

    @media screen and (max-width: 1260px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled.a`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover{
        transition: all 0.1s ease-in-out;
        color: #33c9ff;
        border-bottom: 5px solid #33C9FF;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1260px){
        display: none;
    }
`

export const SpanMasuk = styled.span`
    color: #33c9ff;
`

export const NavBtnLinkMasuk = styled(Link)`
    border-radius: 50px;
    background: #ffffff;
    white-space: nowrap;
    padding: 10px 22px;
    margin: 0 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: solid 1px #33c9ff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        & > ${SpanMasuk} {
        color: #fff;
    }
    
        transition: all 0.2s ease-in-out;
        background: #33c9ff;
        color: #33c9ff;
    }
`

export const NavBtnLinkDaftar = styled(Link)`
    border-radius: 50px;
    background: #33c9ff;
    white-space: nowrap;
    padding: 10px 22px;
    margin: 0 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        border: solid 1px #33c9ff;
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #33c9ff;
    }
`

export const DrawerWrapper = styled.div`
    display: none;

    @media screen and (max-width: 1260px){
        display: contents;
    }
`

export const NavBtnMobile = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
`

export const NavBtnLinkMobile = styled(Link)`
    border-radius: 50px;
    background: #33c9ff;
    white-space: nowrap;
    padding: 10px 22px;
    margin: 5px 5px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #33c9ff;
    }
`

/*---------------------------------------------------END OF LOWER NAV---------------------------------------------------*/