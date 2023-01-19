import React from 'react'
import { Outlet } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { NavbarContainer, NavbarLogo, MainContent, NavItem, NavLinks, NavLog, NavWelcome } from '../styles/LayoutElements'
import ScrollToTop from '../components/ScrollToTop'
import jwt_decode from 'jwt-decode'

const Layout = () => {

  const navigate = useNavigate()

 

    function getCurrentUser() {
      try {
        const token = localStorage.getItem('token');
        return jwt_decode(token);
      } catch (ex) {
        return null;
      }
    }

    const currentUser = getCurrentUser()
    console.log(currentUser)

    const logout = async (e) => {
      localStorage.removeItem('token');
      navigate('/')
    }
  return (
    <>
    <ScrollToTop />
    <NavbarContainer>
        <NavbarLogo>Classical Community</NavbarLogo>
        { currentUser ? <NavWelcome>Welcome, {currentUser.name}</NavWelcome> : null}
       
            <NavItem>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="composers">Composers</NavLinks>
            {
              currentUser ? <NavLog onClick={logout}>Logout</NavLog> : <NavLinks to="login">Login</NavLinks>
            }
            
            </NavItem>
            
        </NavbarContainer>

    <MainContent><Outlet /></MainContent>
    </>
  )
}

export default Layout