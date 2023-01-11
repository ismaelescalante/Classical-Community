import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const WorksHeader = styled.div`
    font-family: 'Ibarra Real Nova';
    padding: 2rem;
`

export const WorksTitle = styled.h1`
    font-size: 28px;
`

export const WorksImg = styled.img`
    border-radius: 50%;
    margin-top: 15px;
`
export const WorksList = styled.ul`
    list-style: none;
    font-family: 'Ibarra Real Nova';
    padding: 1rem;
    margin-left: 25px;
`

export const WorkTitle = styled(NavLink)`
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: #000;
`