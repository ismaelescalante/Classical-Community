import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ComposersHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Ibarra Real Nova';
`

export const ComposersTitle = styled.h1`
    font-size: 28px;
    margin-top: 30px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
`

export const ComposersList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-left: 50px;
    margin-top: 50px;

    @media(max-width: 1170px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 760px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media(max-width: 500px){
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-left: 25px;
    }
`
export const Composer = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    font-size: 22px;
    width: 200px;
    height: 250px;
    box-shadow: 0.5px 0.5px 5px #aaaaaa;
    background-color: white;
    color: #0e0e0e;
    letter-spacing: 0.5px;
    font-family: 'Bebas Neue', serif;
    z-index: 0;
    transition: all 200ms ease-in-out;

    &:hover{
        transform: scale(1.1);
        
    }

    
    
`

export const ComposerImg = styled.img`
    height: 200px;
    margin-bottom: 10px;
    transition: all 200ms ease-in-out;
`