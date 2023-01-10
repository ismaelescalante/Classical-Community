import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarContainer, NavbarLogo, MainContent, NavItem, NavLinks } from '../styles/LayoutElements'

const Layout = () => {
  return (
    <>
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