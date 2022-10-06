import { Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import AuthContext from './context'

interface AuthContextProps {
  children: React.ReactNode
}

const AuthContextProvider: React.FC<AuthContextProps> = ({children}) => {

  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      if(user) setUser(user)
    })

  }, [setUser])

  return (
    <AuthContext.Provider value={{user, login: (loggedIn) => setUser(loggedIn), logout: () => setUser(null)}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider