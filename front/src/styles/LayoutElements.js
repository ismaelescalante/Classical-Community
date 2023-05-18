import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: #0e0e0e;
    top: 0;
    position: sticky;
    z-index: 1;
    box-shadow: 1px 1px 5px #aaaaaa;
    padding: 1rem;
    font-family: 'Libre Baskerville', serif;

    @media(max-width: 600px){
        justify-content: space-around;
    }
`

export const NavbarLogo = styled.h1`
    font-weight: 700;
    font-size: 22px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.5px;
    font-weight: 400;
    padding: 0.5rem;
    @media(max-width: 500px){
        display: none;
    }
`


export const NavItem = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    
`

export const NavLinks = styled(NavLink)`
    text-decoration: none;
    position: relative;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 20px;
    color: #0e0e0e;

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

    @media(max-width: 800px){
       font-size: 16px;
    }
`

export const MainContent = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #f9f9f9;
`

export const NavLog = styled.button`
    cursor: pointer;
    padding: 0.2rem;
    font-size: 22px;
    width: 30%;
    background-color: #e7bf79;
    color: black;
    border: none;
    letter-spacing: 1px;
    font-family: 'Bebas Neue', sans-serif;
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: #0e0e0e;
        color: white;
    }

    @media(max-width: 800px){
       font-size: 16px;
    }

    @media(max-width: 560px){
        font-size: 14px;
    }
    @media(max-width: 500px){
        width: 45%;
    }
    @media(max-width: 340px){
        font-size: 10px;
    }
`

export const NavWelcome = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-top: 5px;
    text-align: center;
    margin-left: 60px;

    @media(max-width: 640px){
        display: none;
    }
`