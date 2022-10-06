import * as React from 'react'

interface BoxProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  fullWidth?: boolean;
  id?: string;
  onClick?: () => void;
  separator?: boolean;
  style?: any;
}

export default function Box (props: BoxProps) {
  const style = { ...props.style }
  if (props.fullWidth) {
    style.width = '100%'
  }
  if (props.fullHeight) {
    style.height = '100%'
  }

  let className = ''
  if (props.separator) {
    // style.borderBottom = "1px solid #EAEDF3";
    className += 'c-box__separator'
  }
  return (
    <div
      className={`c-box ${className}`}
      id={props.id || ''}
      onClick={props.onClick}
      style={style}
    >
      {props.children}
    </div>
  )
}
