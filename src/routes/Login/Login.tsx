import { Form, Label, TextInput, Button } from '../../componentLib'
import { Auth } from 'aws-amplify'
import { Trans } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import React, { useCallback, useState } from 'react'
import './Login.scss'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import AuthContext from '../../components/AuthContext/context'
import { useEffect } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


interface LoginProps {
  className?: string
}

interface LoginFormFields {
  username: string,
  password: string
}

const validationSchema = yup.object({
  username: yup.string(),
  password: yup.string()
})

const Login: React.FC<LoginProps> = (props) => {

const { className } = props

  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormFields>({
    resolver: yupResolver(validationSchema)
  })

  const [isLoading, setIsLoading] = useState(false)

  const authContext = useContext(AuthContext)
  const nav = useNavigate()

  const login = useCallback((username: string, password: string) => {
    setIsLoading(true)
    console.log({username, password})
    Auth.signIn(username, password).then((user) => {
      authContext.login(user)
      setIsLoading(false)
    })
  }, [setIsLoading, authContext])

  useEffect(() => {
    if(authContext.user) {
      nav('/')
    }
  }, [authContext])

  return (
    <div className='Login'>
      <div className="Login__form">
      <h3 className="Login__title">
        <Trans i18nKey='login.title' />
      </h3>
        <Form onSubmit={handleSubmit(({username, password}) => {
          login(username, password)
        })}>
        <div className="username">


          <TextInput type='text' {...register("username")} placeholder='Username' name='username' />
        </div>

          <div className="password">
          <TextInput type='password' {...register("password")} placeholder='Password' name='password' />
          </div>

          <div className='Login__login-button'>
          <Button type='submit' loading={isLoading}><Trans i18nKey={'login.login'} /></Button>
          <Link to='/forgot-password'> <Trans i18nKey={'login.forgotPassword'} /> </Link>
          </div>

          <div className='Login__dont-have'>
            <span><Trans i18nKey={'login.noAccount'} /> <Link to='/sign-up'><Trans i18nKey={'login.signup'} /></Link> </span>
          </div>

        </Form>
      </div>
    </div>
  )
}

export default Login