import { Auth } from 'aws-amplify'
import AuthContext from '../../components/AuthContext/context'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface LogoutProps {
  className?: string
}

const Logout: React.FC<LogoutProps> = (props) => {

const { className } = props

const {logout, user} = useContext(AuthContext)
const nav = useNavigate()

useEffect(() => {
  Auth.signOut().then((v) => {
    logout()
  })
}, [])

useEffect(() => {
  if(!user)
    nav('/')
}, [user] )
  return (
    <div className='Logout'>
    here
    </div>
  )
}

export default Logout
