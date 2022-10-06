import React from 'react'
import { useMediaQuery } from 'react-responsive'

// import { BREAKPOINTS } from '.'

export const Desktop = ({ children }: {children: React.ReactNode}) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
export const Tablet = ({ children }: {children: React.ReactNode}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
export const Mobile = ({ children }: {children: React.ReactNode}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
export const Default = ({ children }: {children: React.ReactNode}) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
