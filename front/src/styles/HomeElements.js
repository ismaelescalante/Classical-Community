import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const HomeContent = styled.div`
    margin-top: -450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: white;
    padding: 2rem;
    font-family: 'Ibarra Real Nova';
`


export const HomeBg = styled.div`
   width: 100%;
   height: 100vh;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    @media(max-width: 790px){
        height: 70%;
    }

    @media(max-width: 790px){
        height: 100%;
    }
`

export const HomeTitle = styled.h1`
    font-size: 42px;
    font-weight: 700;
    text-shadow: 2px 2px black;
    margin-bottom: 15px;
    @media(max-width: 681px){
        font-size: 26px;
    }
`

export const HomeP = styled.p`
    font-size: 32px;
    font-weight: 500;
    text-shadow: 2px 2px black;
    @media(max-width: 681px){
        font-size: 18px;
    }
`

export const HomeAboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Ibarra Real Nova';
    height: 100vh;
    padding-left: 1.5rem;
    padding-top: 2rem;
    @media(max-width: 403px){
        padding-top: 3rem;
    }
`

export const HomeSubTitle = styled.h2`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
    
`

export const HomeText = styled.p`
     font-size: 28px;
    font-weight: 500;
    margin-bottom: 15px;
    
`

export const HomeBtn = styled(NavLink)`
    background-color: black;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 25px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    transition: all 400ms ease-in-out;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const AboutImg1 = styled.img`
    width: 300px;
    padding-top: 3rem;
    margin-top: 75px;
    @media(max-width: 767px){
        margin-top: 100px;
    }
    @media(max-width: 603px){
        margin-top: 150px;
    }
`
export const AboutImg2 = styled.img`
    width: 300px;
    padding-bottom: 2rem;
`