import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import AppSidebar from './Sidebar'
import './Layout.scss'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {

  const loc = useLocation()
  const nav = useNavigate()


  useEffect(() => {
  if (loc.pathname === '/') {
    nav('/dashboard', {replace: true})
  }


  }, [loc, nav])

  return (
    <div className='Layout'>
      <Header currentLocation={loc.pathname} />
      <AppSidebar />
      <div className='Body'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout