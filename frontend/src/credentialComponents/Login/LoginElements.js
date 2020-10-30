import styled from 'styled-components'

export const BaseContainer = styled.div`
    width: 450px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    background-color: #fff;
    border: solid 1.5px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 12px 0.8px #0e81ce96;
`

export const Header = styled.div`
    margin-top: 50px;
    font-size: 24px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImageWrapper = styled.div`
    width: 21em;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Form = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
`

export const Label = styled.label`
    font-size: 20px;
`

export const Input = styled.input`
        margin-top: 6px;
        min-width: 18em;
        height: 37px;
        padding: 0px 10px;
        font-size: 16px;
        background-color: #f3f3f3;
        border: 0;
        border-radius: 4px;
        margin-bottom: 31px;
        transition: all 0.25s ease-in-out;

        &:focus{
            outline: none;
            box-shadow: 0px 0px 12px 0.8px #0e81ce96; 
        }
`

export const Footer = styled.div`
    margin-top: 1em;
    margin-bottom: 3em;
`

export const BtnSubmit = styled.button`
    border-radius: 50px;
    background: #33c9ff;
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