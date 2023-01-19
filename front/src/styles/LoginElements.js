import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    font-family: 'Ibarra Real Nova';
`
export const LoginTitle = styled.h1`
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 600px;
    height: 400px;
    border-radius: 15px;
    border: 2px solid black;
    font-weight: 500;
    font-size: 24px;
`
export const LoginName = styled.input`
    outline: none;
    width: 250px;
    margin-top: -15px;
    border: 1px solid black;
    border-radius: 5px;
    height: 25px;
    font-family: 'Ibarra Real Nova';
     font-size: 20px;   
`

export const LoginEmail = styled.input`
    outline: none;
    width: 250px;
    margin-top: -15px;
    border: 1px solid black;
    border-radius: 5px;
    height: 25px;
    font-family: 'Ibarra Real Nova';
     font-size: 20px;   
`
export const LoginPass = styled.input`
    outline: none;
    width: 250px;
    margin-top: -15px;
    border: 1px solid black;
    border-radius: 5px;
    height: 25px;
    font-family: 'Ibarra Real Nova';
    font-size: 20px;
`

export const LoginBtn = styled.button`
    cursor: pointer;
    padding: 0.5rem;
    font-size: 20px;
    width: 120px;
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
`
export const LoginChangeMode = styled.button`
    cursor: pointer;
    text-decoration: underline;
    font-size: 20px;
    background-color: white;
    border: none;
    font-family: 'Ibarra Real Nova';
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