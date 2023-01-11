import React from 'react'
import {HomeAboutContainer, HomeSubTitle, HomeText, HomeBtn, AboutImg1, AboutImg2} from '../styles/HomeElements'
import Img from '../images/decorative.png'

const HomeAbout = () => {
  return (
    <HomeAboutContainer>
        <AboutImg1 src={Img}/>
        <HomeSubTitle>
          What is Classical Community?
        </HomeSubTitle>
        <HomeText>
          In our community you can leave and read reviews of the best versions of the masterpieces of classical music. Together we can help others to listen to the best music that has ever been made.
        </HomeText>
      
      <HomeBtn to='composers'>See a list of composers</HomeBtn>
        <AboutImg2 src={Img}/>
      </HomeAboutContainer>
  )
}

export default HomeAbout