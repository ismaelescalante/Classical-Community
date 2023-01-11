import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { WorkContainer, WorkTitle } from '../styles/WorkElement'

const Work = () => {

    const [work, setWork] = useState({})
    let {workId} = useParams()

    useEffect(() => {
      const getWork = async () => {
        const res = await fetch(`https://api.openopus.org/work/detail/${workId}.json`)
        const data = await res.json()
        setWork(data.work)
      }

      getWork()
    }, [workId])
    
  return (
    <WorkContainer>
       <WorkTitle>{work.title}</WorkTitle> 
        
    </WorkContainer>
  )
}

export default Work