import React from 'react'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import {Sidebar as InternalSidebar, SidebarItem, SidebarSection} from '../../components'
import {ReactComponent as DashboardIcon} from '../../images/market/icons/sidebar/dashboard.svg'
import {ReactComponent as AccountIcon} from '../../images/market/icons/sidebar/account.svg'
import {ReactComponent as WalletIcon} from '../../images/market/icons/sidebar/wallet.svg'
import {ReactComponent as ReportsIcon} from '../../images/market/icons/sidebar/nut.svg'
import {ReactComponent as ActivityIcon} from '../../images/market/icons/sidebar/exchange.svg'
import {ReactComponent as ApprovalIcon} from '../../images/market/icons/sidebar/auction.svg'

interface SidebarProps {
  className?: string
}

const AppSidebar: React.FC<SidebarProps> = (props) => {

const { className } = props
  return (
    <div className='Sidebar'>
      <InternalSidebar title='Coinlist Custody'>
        <SidebarSection className='Sidebar__main'  title=''>
          <SidebarItem>
            <Link to={'/dashboard'}>
            <DashboardIcon />
            <Trans i18nKey='sidebar.dashboard' />
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to={'/wallets'}>
            <WalletIcon />
            <Trans i18nKey='sidebar.wallets' />
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to={'/activity'}>
            <ActivityIcon />
            <Trans i18nKey='sidebar.activity' />
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to={'/approvals'}>
            <ApprovalIcon />
            <Trans i18nKey='sidebar.approvals' />
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link to={'/reports'}>
              <ReportsIcon />
            <Trans i18nKey='sidebar.reports' />
            </Link>
          </SidebarItem>
        </SidebarSection>
          <SidebarSection title='' className='Sidebar__footer'>
            <SidebarItem>
            <Link to='/account'>
            <Trans i18nKey='sidebar.myAccount' />
             <AccountIcon /> 
            </Link>
            </SidebarItem>
          </SidebarSection>
      </InternalSidebar>
    </div>
  )
}

export default AppSidebar