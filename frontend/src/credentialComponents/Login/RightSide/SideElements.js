import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BaseContainer = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: solid 1.5px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 12px 0.8px #0e81ce96;
    background-color: rgba(14, 129, 206, 0.3);
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 24px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Footer = styled.div`
    margin-top: 1em;
    margin-bottom: 3em;
`

export const BtnGoogle = styled.button`
    border-radius: 50px;
    background: #dd4b39;
    white-space: nowrap;
    z-index: 1;
    padding: 10px 22px;
    margin: 10px 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


export const BtnFacebook = styled.button`
    border-radius: 50px;
    background: #3b5998;
    white-space: nowrap;
    z-index: 1;
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
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


export const BtnRedirect = styled(Link)`
    border-radius: 50px;
    background: #33c9ff;
    white-space: nowrap;
    z-index: 1;
    padding: 10px 30px;
    margin: 10px 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`