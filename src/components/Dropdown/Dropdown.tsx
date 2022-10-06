import React, { useMemo } from 'react'
import RcDropdown from 'rc-dropdown'
import 'rc-dropdown/assets/index.css';
import "./Dropdown.scss"

interface DropdownProps {
  className?: string
  children: React.ReactElement
  options: {text: React.ReactNode, onClick: () => void}[]
}

const Dropdown: React.FC<DropdownProps> = (props) => {

const { className, children, options } = props

  const dropdownOverlay = useMemo(() => {
    return (
      <div className="Dropdown__overlay">
        {options.map((option, i) => {
          return (
            <div className='Dropdown__overlay-option' key={i}  onClick={option.onClick}>
              {option.text}
            </div>
          )
        })}
      </div>
    )
  }, [options])

  return (
    <div className='Dropdown'>
      <RcDropdown overlay={dropdownOverlay} trigger={['click']}>
        {children}
      </RcDropdown>
    </div>
  )
}

export default Dropdown
