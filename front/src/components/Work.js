import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { WorkContainer, WorkTitle, WorkComposer, WorkForm, WorkText, WorkConductor, WorkYear, WorkOrchestra, WorkLabel, WorkReview, WorkSubmit, WorkReviews, WorkDetail, WorkAuthor, DeleteBtn } from '../styles/WorkElements'
import _ from 'lodash'
import jwt_decode from 'jwt-decode'
import { v4 as uuidv4 } from 'uuid';
import Joi from "joi-browser";
import { LoginError } from '../styles/LoginElements'

const Work = () => {

    const [work, setWork] = useState({})
    const [error, setError] = useState(null)
    const [conductor, setConductor] = useState('')
    const [year, setYear] = useState('')
    const [orchestra, setOrchestra] = useState('')
    const [label, setLabel] = useState('')
    const [review, setReview] = useState('')
    let {workId} = useParams()

    const schema = {
      conductor: Joi.string().required(),
    };

     
    useEffect(() => {
      const getWork = async () => {
        const dbCall = await fetch(`https://classical-community.onrender.com/works/${workId}`)
  
        let dbData;
        try {
          dbData = await dbCall.json()
  
        } catch(ex) {
          const apiCall = await fetch(`https://api.openopus.org/work/detail/${workId}.json`)

          try {
            dbData = await apiCall.json()
        
            dbData.title = dbData.work.title
            dbData.composer = dbData.composer.complete_name
          } catch (err){
            console.log('no me toques los params')
          }
          
        }
      
        setWork(dbData)
      }

      

      getWork()
    }, [workId])

    function getCurrentUser() {
      try {
        const token = localStorage.getItem('token');
        return jwt_decode(token);
      } catch (ex) {
        return null;
      }
    }

    const currentUser = getCurrentUser()

    const deleteReview = async (id) => {
       console.log(id)
       const idReview = {
        id: id
       }
      await axios.put(`https://classical-community.onrender.com/works/update/${workId}`, idReview)

      window.location.reload(false)
      
    }
    

    const handleSubmit = async (e) => {
      e.preventDefault()

      const newReview = {
        conductor,
        year,
        orchestra,
        label,
        review,
        author: currentUser.name,
        id: uuidv4()
      }

      console.log(newReview)

      const newWork = {
        title: work.title,
        composer: work.composer,
        idWork: workId, 
        reviews: [newReview]
      }

      if(_.isEmpty(work.reviews)){
        const { data } = await axios.post('https://classical-community.onrender.com/works/', newWork)
        console.log(data)
        window.location.reload(false)
      } else{
        try {
          const {review} = await axios.put(`https://classical-community.onrender.com/works/${workId}`, newReview)
          console.log(review)
          setError(null)
          window.location.reload(false)
        } catch (error) {
          console.log(error)
          if(error.response.data === '"conductor" is not allowed to be empty'){
            setError('Enter a conductor')
          }
          if(error.response.data === '"year" is not allowed to be empty'){setError('Enter a year')}
          
          if(error.response.data === '"orchestra" is not allowed to be empty'){setError('Enter an orchestra')}
          
          if(error.response.data === '"label" is not allowed to be empty'){
            setError('Enter a label')
          }
          
          if(error.response.data === '"review" is not allowed to be empty'){
            setError('Enter a review')
          }
          
        }
        
      }

      
    }

    if (_.isEmpty(work)) {
      return "Loading..."
    }
    else{

    
    
  return (
    <WorkContainer>
       <WorkTitle>{work.title}</WorkTitle> 
       <WorkComposer>{work.composer}</WorkComposer>
        {!work.reviews ? null : work.reviews.map(review => (
        <WorkReviews key={review._id}>
          <WorkAuthor>Review by {review.author}</WorkAuthor> 
          <WorkDetail>Conductor: {review.conductor}</WorkDetail>
          <WorkDetail>Year: {review.year}</WorkDetail>
          <WorkDetail>Orchestra: {review.orchestra}</WorkDetail>
          <WorkDetail>Label: {review.label}</WorkDetail>
          <WorkDetail>{review.review}</WorkDetail>
          { !currentUser ? null : currentUser.isAdmin ? <DeleteBtn onClick={e => deleteReview(review.id)}>Delete</DeleteBtn> : null}
        </WorkReviews> 
       )) 
       }
        
      <hr />
      {currentUser ? 
        <>
      <WorkText>Submit a review of your favorite version of this work</WorkText>
       <WorkForm>
        Conductor <WorkConductor onChange={e => setConductor(e.target.value)} value={conductor}></WorkConductor>
        Year <WorkYear onChange={e => setYear(e.target.value)} value={year}></WorkYear>
        Orchestra <WorkOrchestra onChange={e => setOrchestra(e.target.value)} value={orchestra}></WorkOrchestra>
        Label <WorkLabel onChange={e => setLabel(e.target.value)} value={label}></WorkLabel>
        Review <WorkReview rows="15" cols="60" onChange={e => setReview(e.target.value)} value={review}></WorkReview>
        {error ? <LoginError>{error}</LoginError> : null}
        <WorkSubmit type='submit' validSchema={schema} onClick={handleSubmit}>Submit</WorkSubmit>
        
       </WorkForm></> : "Log in to submit a review"}
       
        
    </WorkContainer>
  )
}
}

export default Work