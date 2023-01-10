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
    padding-top: 1rem;
`
export const ComposersP = styled.p`
    font-weight: 500;
    font-size: 22px;
    padding-bottom: 2rem;
`

export const ComposersList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding-bottom: 1rem;
    padding-left: 2rem;
`
export const Composer = styled(NavLink)`
    text-decoration: none;
    padding: 1rem;
    font-size: 18px;
    font-weight: 500;
    color: black;
    font-family: 'Ibarra Real Nova';

    
    position: relative;
    
    font-weight: 500;

    
`