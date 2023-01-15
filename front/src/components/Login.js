import React, { useState } from 'react'
import { LoginContainer, LoginTitle, LoginForm, LoginName, LoginEmail, LoginPass, LoginBtn, LoginChangeMode } from '../styles/LoginElements'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [isRegister, setIsRegister] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

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
      navigate('/')
    }

    const processLogin = async (e) => {
      e.preventDefault()

      const loggedUser = {
        email,
        password: pass
      }

      const { data } = await axios.post('http://localhost:5000/auth/', loggedUser)
      console.log(data)

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