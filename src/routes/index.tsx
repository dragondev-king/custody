import getI18nInstance from 'i18n'
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Account from './Account'
import Coin from './Coin'
import Dashboard from './Dashboard'
import Layout from './Layout'
import Login from './Login'
import Logout from './Logout'
import Reports from './Reports'
import Wallet from './Wallet'
import { I18nextProvider } from 'react-i18next'
import Activity from './Activity'
import Approval from './Approval'
import AuthContext from '../components/AuthContext/context'

const RequireAuth: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const authContext = useContext(AuthContext)

  if (!authContext.user) { return <Navigate to="/login" /> }

  return <>
    {children}
  </>
}

const AppRoutes = () => {
  const [i18n, setI18n] = useState<any>(null)

  useEffect(() => {
    getI18nInstance().then((instance) => {
      setI18n(instance)
    })
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/wallets" element={<Wallet />} />
        <Route path="/approvals" element={<Approval />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/account" element={<Account />} />

      </Route>
    </Routes>
    </I18nextProvider>
  )
}

export default AppRoutes
