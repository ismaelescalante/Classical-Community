import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const WorksHeader = styled.div`
    font-family: 'Libre Baskerville';
    padding: 2rem;
`

export const WorksTitle = styled.h1`
    font-size: 32px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-left: 50px;
    color: #0e0e0e;

    @media(max-width: 402px){
        font-size: 28px;
    }
`

export const WorksImg = styled.img`
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 50px;
`
export const WorksList = styled.ul`
    list-style: none;
    font-family: 'Ibarra Real Nova';
    padding: 1rem;
    margin-left: 50px;
    margin-bottom: 20px;
`

export const WorkTitle = styled(NavLink)`
    box-shadow: 0.5px 0.5px 5px #aaaaaa;
    background-color: white; 
    padding: 1rem;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: #000;
    transition: all 200ms ease-in-out;

    &:hover{
        padding: 1.5rem;
    }

    @media(max-width: 560px){
        font-size: 16px;
    }

    @media(max-width: 471px){
        font-size: 12px;
    }

    @media(max-width: 382px){
        font-size: 10px;
    }
`