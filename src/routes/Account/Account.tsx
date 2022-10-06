import React from 'react'
import {ReactComponent as AccountLogo} from '../../images/market/icons/sidebar/account.svg'
import {ReactComponent as LockIcon} from '../../images/market/icons/shared/lock.svg'
import { Trans } from 'react-i18next'
import './Account.scss'

interface AccountProps {
  className?: string
}

const Account: React.FC<AccountProps> = (props) => {

const { className } = props
  const options = [
  {Icon: AccountLogo, name: "personalInformation" },
  {Icon: LockIcon, name: "security" },
  {Icon: AccountLogo, name: "preferences"},
  {Icon: AccountLogo, name: "developerOptions"}
  ];
  return (
    <div className='Account'>
    <h3 className="Account__title">
      <Trans i18nKey={'account.title'} />
    </h3>
    <div className="Account__options">
    {options.map((({Icon, name }) => (
      <div key={name} className="Account__option">
        <div className="Account__option-icon"><Icon /></div>
        <div className="Account__option-information">
        <div className="Account__option-title"><Trans i18nKey={`account.${name}.title`} />  </div>
        <div className="Account__option-description"><Trans i18nKey={`account.${name}.description`} /></div>
        </div>
      </div>
    )))}
    </div>
    </div>
  )
}

export default Account