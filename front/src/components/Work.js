import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { WorkContainer, WorkTitle, WorkComposer, WorkForm, WorkText, WorkConductor, WorkYear, WorkOrchestra, WorkLabel, WorkReview, WorkSubmit, WorkReviews, WorkDetail, WorkAuthor } from '../styles/WorkElements'
import _ from 'lodash'
import jwt_decode from 'jwt-decode'

const Work = () => {

    const [work, setWork] = useState({})

    const [conductor, setConductor] = useState('')
    const [year, setYear] = useState('')
    const [orchestra, setOrchestra] = useState('')
    const [label, setLabel] = useState('')
    const [review, setReview] = useState('')
    let {workId} = useParams()


     
    useEffect(() => {
      const getWork = async () => {
        const dbCall = await fetch(`http://localhost:5000/works/${workId}`)
  
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
    

    const handleSubmit = async (e) => {
      

      const newReview = [{
        conductor,
        year,
        orchestra,
        label,
        review,
        author: currentUser.name
      }]

      const newWork = {
        title: work.title,
        composer: work.composer,
        idWork: workId, 
        reviews: newReview
      }

      if(_.isEmpty(work.reviews)){
        const { data } = await axios.post('http://localhost:5000/works/', newWork)
        console.log(data)
      } else{
        const {review} = await axios.put(`http://localhost:5000/works/${workId}`, newReview)
        console.log(review)
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
          <WorkDetail>Review: {review.review}</WorkDetail>
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
        <WorkSubmit type='submit' onClick={handleSubmit}>Submit</WorkSubmit>
       </WorkForm></> : "Log in to submit a review"}
       
        
    </WorkContainer>
  )
}
}

export default Work