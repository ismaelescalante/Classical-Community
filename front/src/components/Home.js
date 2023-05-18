import React from 'react'
import { HomeContainer, HomeTitle, HomeAbout, AboutDescription, AboutBtn } from '../styles/HomeElements'
import Img from '../../src/images/img.jpg'

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>This is your community</HomeTitle>
      <HomeAbout>
        <AboutDescription>SUBMIT NOW YOUR REVIEWS <br /> OF THE BEST RECORDINGS OF ALL TIME</AboutDescription>
        <AboutBtn to='composers'>GET STARTED</AboutBtn>
      </HomeAbout>
       </HomeContainer>
  )
}

export default Home