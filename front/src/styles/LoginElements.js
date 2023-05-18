import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    font-family: 'Raleway';
`
export const LoginTitle = styled.h1`
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Bebas Neue';
    font-weight: 400;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    box-shadow: 0.5px 0.5px 5px #aaaaaa;
    width: 45%;
    height: 450px;
    font-weight: 500;
    font-size: 24px;

    @media(max-width: 890px){
        width: 70%;
    }

    @media(max-width: 650px){
        width: 85%;
    }
`
export const LoginInput = styled.input`
    outline: none;
    border: none;
    background-color: #f9f9f9;
    box-shadow: 0.5px 0.5px 4px #aaaaaa;
    padding: 0.5rem;
    width: 50%;
    font-family: 'Raleway';
    margin-top: -15px;
    height: 20px;
    font-size: 20px;   

    @media(max-width: 500px){
        width: 70%;
    }
`

export const LoginBtn = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.5rem;
    font-size: 26px;
    width: 25%;
    background-color: #e7bf79;
    font-family: 'Bebas Neue';
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: #0e0e0e;
        color: white;
    }

    @media(max-width: 500px){
        width: 50%;
    }
`
export const LoginChangeMode = styled.button`
    cursor: pointer;
    text-decoration: underline;
    font-size: 20px;
    background-color: white;
    border: none;
    font-family: 'Raleway';
`

export const LoginError = styled.p`
    font-size: 18px; 
    background-color: #d62433;
    padding: 0.5rem;
    color: white;
    border-radius: 5px;
    margin-top: 15px;
    width: 40%;
    text-align: center;
`