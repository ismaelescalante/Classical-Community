import styled from 'styled-components'

export const WorkContainer = styled.div`
    font-family: 'Raleway';
    padding: 2rem;
`

export const WorkTitle = styled.h1`
    font-size: 28px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
`
export const WorkComposer = styled.h2`
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
`

export const WorkText = styled.p`
    margin-top: 20px;
    font-size: 22px;
    text-align: center;
    font-family: 'Raleway';
`

export const WorkForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-family: 'Raleway';
`

export const WorkInput = styled.input`
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px #aaaaaa;
    width: 40%;
    height: 20px;
    font-family: 'Raleway';
    font-size: 18px;
    padding: 0.5rem;
    margin-top: 15px;
    margin-bottom: 15px;

    @media(max-width: 650px){
        width: 50%;
    }

    @media(max-width: 500px){
        width: 60%;
    }
`
export const WorkReview = styled.textarea`
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px #aaa;
    width: 50%;
    font-family: 'Raleway';
    padding: 0.5rem;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 15px;

    @media(max-width: 650px){
        width: 60%;
    }

    @media(max-width: 500px){
        width: 70%;
    }

    @media(max-width: 400px){
        width: 90%;
    }
`

export const WorkSubmit = styled.button`
    cursor: pointer;
    margin-top: 20px;
    font-size: 20px;
    width: 15%;
    background-color: #e7bf79;
    font-family: 'Bebas Neue';
    font-weight: 400;
    padding: 0.2rem;
    border: none;
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: #0e0e0e;
        color: white;
    }

    @media(max-width: 450px){
        width: 30%;
    }
`

export const WorkReviews = styled.ul`
    font-weight: 500;
    list-style: none;
    margin-bottom: 20px;
    border-radius: 5px;
    width: 95%;
    padding: 1rem;
    box-shadow: 0.5px 0.5px 5px #aaaaaa;
    background-color: white;
`

export const WorkDetail = styled.li`
    font-weight: 500;
    font-size: 18px;
    margin-top: 10px;
    font-family: 'Raleway';
`

export const WorkAuthor = styled.p`
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    font-family: 'Bebas Neue', serif;
    background-color: #e7bf79;
    width: 10%;
    padding: 0.5rem;
    font-weight: 400;

    @media(max-width: 1237px){
        width: 20%;
    }

    @media(max-width: 650px){
        width: 30%;
    }

    @media(max-width: 455px){
        width: 40%;
    }
`

export const DeleteBtn = styled.button`
    cursor: pointer;
    font-family: 'Bebas Neue';
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 18px;
    padding: 0.2rem;
    font-weight: 700;
    margin-top: 15px;
    border: none;
    width: 20%;
    text-shadow: 1px 1px black;
    background-color: #d62433;
    color: white;

    &:hover{
        background-color: #ab0f29;
    }

    @media(max-width: 650px){
        width: 30%;
    }

    @media(max-width: 455px){
        width: 40%;
    }
`