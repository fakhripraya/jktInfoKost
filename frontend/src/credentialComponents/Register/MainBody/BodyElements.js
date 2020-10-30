import styled from 'styled-components'

export const BaseContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        transform: scale(0.8);
    }
    
    @media screen and (max-width: 480px){
        transform: scale(0.6);
    }
`

export const Background = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
`