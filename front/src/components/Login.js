import React, { useState } from 'react'
import { LoginContainer, LoginTitle, LoginForm, LoginEmail, LoginPass, LoginBtn, LoginChangeMode } from '../styles/LoginElements'

const Login = () => {

    const [isRegister, setIsRegister] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const processRegister = e => {
        e.preventDefault()
        setIsRegister(!isRegister)
    }

  return (
    <LoginContainer>
        <LoginTitle> {isRegister ? 'Register' : 'Login'}</LoginTitle>
        <LoginForm>
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
            <LoginBtn> {isRegister ? 'Register': 'Login'}</LoginBtn>
            <LoginChangeMode onClick={processRegister}>{ isRegister ? 'Already have an account?' : `You aren't registered?`}</LoginChangeMode>
        </LoginForm>
    </LoginContainer>
  )
}

export default Login