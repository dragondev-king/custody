import { Button } from 'componentLib'
import { Trans } from 'react-i18next'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from 'utils/auth'
import Dropdown from '../../components/Dropdown'
import {ReactComponent as AccountLogo} from '../../images/market/icons/sidebar/account.svg'

interface HeaderProps {
  currentLocation: string
}

const Header: React.FC<HeaderProps> = ({currentLocation}) => {

  const nav = useNavigate()

  return (

  <div className="Header">
    <div className="Header__account">
        <Dropdown options={[{text: <Trans i18nKey={'header.account'} />, onClick: () => nav('/account')}, {text: <Trans i18nKey={'header.logout'} />, onClick: () => logout()}]}>
      <AccountLogo />
        </Dropdown>
    </div>
  </div>
  )
}

export default Header