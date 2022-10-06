import React, { useState } from 'react'
import './Sidebar.scss'
import SidebarContext from './SidebarContext'

export interface SidebarProps {
  className?: string
  children: React.ReactNode
  title?: string
}

const Sidebar: React.FC<SidebarProps> = ({ children, className, title }) => {
  const [focusedNavMenu, setFocusedNavMenu] = useState<string | null>(null)
  return (
    <SidebarContext.Provider
      value={{
        focusedNavMenu,
        setFocusedNavMenu
      }}
    >
      <nav className={`Sidebar ${className || ''}`}>
      <h3 className='Sidebar__title'>{title}</h3>
        
        {children}</nav>
    </SidebarContext.Provider>
  )
}

export default Sidebar
