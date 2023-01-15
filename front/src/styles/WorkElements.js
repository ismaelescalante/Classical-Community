import styled from 'styled-components'

export const WorkContainer = styled.div`
    font-family: 'Ibarra Real Nova';
    padding: 2rem;
`

export const WorkTitle = styled.h1`
    font-size: 28px;
`
export const WorkComposer = styled.h2`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const WorkText = styled.p`
    font-weight: 500;
    margin-top: 15px;
    font-size: 18px;
`

export const WorkForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    
`

export const WorkConductor = styled.input`
    outline: none;
    width: 300px;
    font-family: 'Ibarra Real Nova';
    font-size: 15px;
`
export const WorkYear = styled.input`
    outline: none;
    width: 300px;
    font-family: 'Ibarra Real Nova';
    font-size: 15px;
`
export const WorkOrchestra = styled.input`
    outline: none;
    width: 300px;
    font-family: 'Ibarra Real Nova';
    font-size: 15px;
`
export const WorkLabel = styled.input`
    outline: none;
    width: 300px;
    font-family: 'Ibarra Real Nova';
    font-size: 15px;
`
export const WorkReview = styled.textarea`
    outline: none;
    width: 600px;
    font-family: 'Ibarra Real Nova';
    font-size: 18px;
`

export const WorkSubmit = styled.button`
    cursor: pointer;
    margin-top: 20px;
    font-size: 20px;
    width: 120px;
    background-color: black;
    color: white;
    font-family: 'Ibarra Real Nova';
    font-weight: 700;
    border-radius: 5px;
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: white;
        color: black;
    }
`

export const WorkReviews = styled.ul`
    font-weight: 500;
    list-style: none;
    margin-bottom: 20px;
    border: 2px solid black;
    border-radius: 5px;
    width: 350px;
    padding: 1rem;
`

export const WorkDetail = styled.li`
    font-weight: 500;
    font-size: 18px;
`

export const WorkAuthor = styled.p`
    font-weight: 700;
    font-size: 20px;
`