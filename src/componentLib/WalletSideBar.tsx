import React from 'react'
interface WalletSideBarProps {
  amount?: any;
  assetSymbol?: string;
  fullWidth?: boolean;
  logo?: any;
  onClick: () => void;
  style?: any;
  subtitle: string;
}

export default function WalletSideBar (props: WalletSideBarProps) {
  const style = { ...props.style, cursor: 'pointer' }
  style.padding = style.padding || 16
  if (props.fullWidth) {
    style.width = '100%'
  }
  return (
    <div
      className="c-box s-marginBottom1 s-padding1_5 u-whiteSpaceNowrap"
      onClick={props.onClick}
      style={style}
    >
      <div style={{ overflow: 'hidden' }}>
        <div className="u-displayInlineBlock u-verticalAlignMiddle s-marginRight0_5">
          <img
            alt={props.assetSymbol + 'Logo'}
            src={props.logo}
            style={{ width: 32 }}
          />
        </div>
        <div className="u-displayInlineBlock u-verticalAlignMiddle u-fontWeight700">
          <div>{props.assetSymbol}</div>
          <div className="s-fontSize14 u-colorGrayA u-fontWeight300">
            {props.subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}
