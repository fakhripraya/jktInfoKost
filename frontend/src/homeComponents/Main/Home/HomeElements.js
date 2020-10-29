import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    position: relative;
    max-width: 2000px;
`

export const HeroBgWrapper = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroIcon = styled.img`
    width: auto;
    height: auto;
`

export const HeroH1 = styled.h1`
    color: #202020;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 5px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-bottom: 10px;
    color: #202020;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

export const CarouselItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    max-width: 2000px;
`

export const CarouselItem = styled.img`
    width: 33%;
`

/*INFO SECTION*/

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#D5F4FF')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 760px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const FirstColumn = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const SecondColumn = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-top: 60px;
`

export const TopLine = styled.p`
    color: #33c9ff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : "#fff")};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const CustomButton = styled(Link)`
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
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

/*CATEGORY SECTION*/

export const CategoryContainer = styled.div`
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #D5F4FF;

    @media screen and (max-width: 1000px){
        height: 800px;
    }

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const CategoryWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 26px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const CategoryCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CategoryIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const CategoryH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const CategoryH2Cont = styled.h2`
    font-size: 1rem;
    margin-bottom: 64px;
`

export const CategoryH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const CategoryP = styled.p`
    font-size: 1rem;
    text-align: center;
`

/*SLIDER SECTION*/

export const RekomendasiContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RekomendasiHeader = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const RekomendasiBody = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LeftSideWrapper = styled.div`
    margin-top: -22px;   
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 100px;
`

export const RightSideWrapper = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-left: 100px;
`