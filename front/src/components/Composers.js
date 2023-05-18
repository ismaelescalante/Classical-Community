import React, { useEffect, useState } from 'react'
import {ComposersHeader, ComposersTitle, ComposersList, Composer, ComposerImg} from '../styles/ComposersElements'

const Composers = () => {

  const [composers, setComposers] = useState([])


  useEffect(() => {
    const getComposers = async () => {
      const res = await fetch('https://api.openopus.org/composer/list/rec.json')
      const data = await res.json()
      setComposers(data.composers)
      
    }

    getComposers()
  }, [])

  return (
    <>
    <ComposersHeader>
    <ComposersTitle>
      List of Composers
    </ComposersTitle>
    </ComposersHeader>

    <ComposersList>
      {composers.map((composer) => (
        
        <Composer to={`${composer.id}`} key={composer.id}>
          <ComposerImg src={composer.portrait}></ComposerImg>
          {composer.name}</Composer>
      
    ))}
    </ComposersList>
    </>

  )
}

export default Composers