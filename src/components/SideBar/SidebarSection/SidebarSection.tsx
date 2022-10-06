import React from 'react'
import cx from 'classnames'

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, className, children }) => {
  return (
    <div className={cx('Sidebar__section', className)} key={title}>
      <div className='Sidebar__group-title'>{title}</div>

      <ul className='Sidebar__list'>{children}</ul>
    </div>
  )
}

export default SidebarSection
