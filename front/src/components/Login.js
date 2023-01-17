import React, { useState } from 'react'
import { LoginContainer, LoginTitle, LoginForm, LoginName, LoginEmail, LoginPass, LoginBtn, LoginChangeMode } from '../styles/LoginElements'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthConsumer from '../hooks/useAuth'


const Login = () => {

    const [isRegister, setIsRegister] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const [user, dispatch] = AuthConsumer()
    

    const processChange = e => {
        e.preventDefault()
        setIsRegister(!isRegister)
    }

    const processRegister = async (e) => {
      e.preventDefault()

      const newUser = {
        name,
        email,
        password: pass
      }

      const { data } = await axios.post('http://localhost:5000/users/', newUser)
      console.log(data)
      const token = data.headers['x-auth-token']
      localStorage.setItem('token', token)
      navigate('/')
    }

    const processLogin = async (e) => {
      e.preventDefault()

      const loggedUser = {
        email,
        password: pass
      }

      const response = await axios.post('http://localhost:5000/auth/', loggedUser)
      const token = response.headers['x-auth-token']
      localStorage.setItem('token', token)
      dispatch({type: 'login'})

      navigate('/')

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
            <LoginChangeMode onClick={processChange}>{ isRegister ? 'Already have an account?' : `You aren't registered?`}</LoginChangeMode>
        </LoginForm>
    </LoginContainer>
  )
}

export default Login