import * as React from 'react'
import { WalletCell } from '../types/types'

import Flex from './Flex'

interface WalletCellsProps {
  walletCells: Array<WalletCell>;
}

export default function WalletCells (props: WalletCellsProps) {
  const { walletCells } = props
  return (
    <Flex
      alignItems="stretch"
      container
      style={{ flexWrap: 'nowrap', padding: 0 }}
    >
      {walletCells.map((cell, index) => (
        <div
          key={index}
          style={{
            borderRight:
              index !== walletCells.length - 1 ? '1px solid #EAEDF3' : '',
            padding: 16
          }}
        >
          <Flex alignItems="center" container style={{ flexWrap: 'nowrap' }}>
            <label
              className={'c-label s-fontSize12'}
              style={{ display: 'inline' }}
            >
              {cell.labelText}
              {cell.toolTipText && (
                <i
                  className="icon-info-circled-alt js-tooltip_simple u-colorGray6"
                  style={{ display: 'inline', fontSize: 12, paddingLeft: 3 }}
                  title={cell.toolTipText}
                ></i>
              )}
            </label>
          </Flex>
          <div>{cell.value}</div>
        </div>
      ))}
    </Flex>
  )
}
