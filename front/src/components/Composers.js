import React, { useEffect, useState } from 'react'
import {ComposersHeader, ComposersTitle, ComposersP, ComposersList, Composer} from '../styles/ComposersElements'

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
    <ComposersP>Here is a list of all the composers. Click on any composer to see a list of his works</ComposersP>
    </ComposersHeader>

    <ComposersList>
      {composers.map((composer) => (
        
        <Composer to={`${composer.id}`} key={composer.id}>{composer.name}</Composer>
      
    ))}
    </ComposersList>
    </>

  )
}

export default Composers