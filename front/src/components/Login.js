import React, { useState } from 'react'
import { LoginContainer, LoginTitle, LoginForm, LoginName, LoginEmail, LoginPass, LoginBtn, LoginChangeMode, LoginError } from '../styles/LoginElements'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthConsumer from '../hooks/useAuth'



const Login = () => {

    const [isRegister, setIsRegister] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const [user, dispatch] = AuthConsumer()
    

    const processChange = e => {
        e.preventDefault()
        setIsRegister(!isRegister)
        setError('')
    }

    const processRegister = async (e) => {
      e.preventDefault()

      const newUser = {
        name,
        email,
        password: pass,
        isAdmin: false
      }

      try {
        const response = await axios.post('https://classical-community.onrender.com//users/', newUser)
        const token = response.headers['x-auth-token']
        localStorage.setItem('token', token)
        navigate('/')
      } catch (error) {
        console.log(error)
        if(error.response.data === "Email or password not valid"){
          setError('Email or password not valid')
        }

        if(error.response.data === "\"password\" is not allowed to be empty"){
          setError("Please enter a password")
        }

        if(error.response.data === "\"email\" is not allowed to be empty"){
          setError("Please enter an email")
        }

        if(error.response.data === "\"name\" is not allowed to be empty"){
          setError("Please enter a username")
        }

        if(error.response.data === "\"email\" must be a valid email"){
          setError("Email format is not valid")
        }

        if(error.response.data === 'User already exists'){
          setError("User already exists")
        }
      }
      
    }

    const processLogin = async (e) => {
      e.preventDefault()

      const loggedUser = {
        email,
        password: pass
      }
      try {
        const response = await axios.post('https://classical-community.onrender.com//auth/', loggedUser)
      const token = response.headers['x-auth-token']
      localStorage.setItem('token', token)
      dispatch({type: 'login'})

      navigate('/')
      } catch (error) {
        console.log(error)
        if(error.response.data === "Email or password not valid"){
          setError('Email or password not valid')
        }

        if(error.response.data === "\"password\" is not allowed to be empty"){
          setError("Please enter a password")
        }

        if(error.response.data === "\"email\" is not allowed to be empty"){
          setError("Please enter an email")
        }

        if(error.response.data === "\"email\" must be a valid email"){
          setError("Email format is not valid")
        }
      }
      

    }

  return (
    <LoginContainer>
        <LoginTitle> {isRegister ? 'Register' : 'Login'}</LoginTitle>
        <LoginForm>

          {isRegister ? (
            <>
            Username<LoginName
             onChange={e => setName(e.target.value)}
             value={name}
             type="text" 
            ></LoginName>

            Email<LoginEmail
             onChange={e => setEmail(e.target.value)}
             value={email}
             type="email" 
            ></LoginEmail>
            
            
            Password<LoginPass 
            onChange={e => setPass(e.target.value)}
            value={pass}
            type="password" 
            ></LoginPass>
            
            </>
            ) : (<>Email<LoginEmail
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email" 
             ></LoginEmail>
 
             Password<LoginPass 
             onChange={e => setPass(e.target.value)}
             value={pass}
             type="password" 
             ></LoginPass>
             </>)}

            

            
            

            <LoginBtn onClick={isRegister ? processRegister : processLogin }> {isRegister ? 'Register': 'Login'}</LoginBtn>
            { error ? <LoginError>{error}</LoginError> : null}
            <LoginChangeMode onClick={processChange}>{ isRegister ? 'Already have an account?' : `You aren't registered?`}</LoginChangeMode>
        </LoginForm>
    </LoginContainer>
  )
}

export default Login