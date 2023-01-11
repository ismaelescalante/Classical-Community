import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { WorksTitle, WorksHeader, WorksImg, WorksList, WorkTitle } from '../styles/WorksElements';

const Works = () => {
    const [works, setWorks] = useState([])
    const [info, setInfo] = useState({})
    let {composerId} = useParams()

    useEffect(() => {
      const getWorks = async () => {
        const res = await fetch(`https://api.openopus.org/work/list/composer/${composerId}/genre/all.json`)
        const data = await res.json()
        setInfo(data.composer)
        setWorks(data.works)
      }

      getWorks()
    }, [composerId])
    
  return (
    <>
    <WorksHeader>
    <WorksTitle>Works by {info.complete_name}</WorksTitle>
    <WorksImg src={info.portrait} alt='portrait of this composer'></WorksImg>
    </WorksHeader>

    {works.map((work) => (
        <WorksList key={work.id}>
            <WorkTitle to={`${work.id}`}>{work.title}</WorkTitle>
        </WorksList>
    ))}
   </>
  )
  
}

export default Works