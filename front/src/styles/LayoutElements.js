import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-bottom: 2px solid black;
    padding: 1rem;
    font-family: 'Ibarra Real Nova', serif;
`

export const NavbarLogo = styled.h1`
    color: black;
    font-weight: 700;
    font-size: 28px;
    @media(max-width: 448px){
        font-size: 20px;
    }
`


export const NavItem = styled.div`
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NavLinks = styled(NavLink)`
    text-decoration: none;
    position: relative;
    color: #000;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 20px;

    &:hover{
        color: #000;
    }

    &::before{
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transition: transform 0.5s ease;
    }

    &:hover::before{
        transform: scaleX(1)
    }

    @media(max-width: 448px){
        font-size: 15px;
    }
`

export const MainContent = styled.div`
    height: 100vh;
`

export const NavLog = styled.button`
    cursor: pointer;
    padding: 0.2rem;
    font-size: 18px;
    width: 100px;
    background-color: black;
    color: white;
    font-family: 'Ibarra Real Nova';
    font-weight: 700;
    border-radius: 10px;
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: white;
        color: black;
    }

    @media(max-width: 448px){
        font-size: 12px;
    }
`

export const NavWelcome = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-top: 5px;

    @media(max-width: 550px){
        display: none;
    }
`