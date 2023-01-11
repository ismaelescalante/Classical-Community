import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarContainer, NavbarLogo, MainContent, NavItem, NavLinks } from '../styles/LayoutElements'
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <NavbarContainer>
        <NavbarLogo>Classical Community</NavbarLogo>
       
            <NavItem>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="composers">Composers</NavLinks>
            <NavLinks to="works">Works</NavLinks>
            </NavItem>
            
        </NavbarContainer>

    <MainContent><Outlet /></MainContent>
    </>
  )
}

export default Layout