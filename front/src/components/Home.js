import React from 'react'
import { HomeContainer, HomeTitle, HomeP, HomeBg, ImgBg, HomeContent } from '../styles/HomeElements'
import Img from '../../src/images/img.jpg'
import HomeAbout from './HomeAbout'

const Home = () => {
  return (
    <HomeContainer>
      <HomeBg>
        <ImgBg src={Img}/>
        <HomeContent>
      <HomeTitle>
        Welcome to Classical Community
      </HomeTitle>
      <HomeP>
        A community for music lovers to share the best gems of classical music
      </HomeP>
      </HomeContent>
      </HomeBg>
      

      <HomeAbout />
      
    </HomeContainer>
  )
}

export default Home