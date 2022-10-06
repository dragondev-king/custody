import React, { useState } from 'react'
import { Button, Label, Select, TableWithPagination } from 'componentLib'
import { Trans } from 'react-i18next'
import moment from 'moment'
import './Coin.scss'
import { AlgoLogo, EthLogo, FilLogo } from 'shared/logos'
import { useSearchParams } from 'react-router-dom'

interface CoinProps {
  className?: string
}

const Coin: React.FC<CoinProps> = (props) => {

const [tokens, setTokens] = useState([{tokenName: "All Coins"}, {tokenName: "Ether"}, {tokenName: "Chainlink"}]);
const [params] = useSearchParams({entries: ["selectedToken", "All Coins"]})
const [selectedToken, setSelectedToken] = useState(params.get("selectedToken") || "All Coins")
const headers = ["Date", "To/From", "", "Coin/Token", "Amount"];



const rows = [
  [moment(Date.now()).toString(), <span className='reciever-cell'>Sent to 0xoaisudhioaushdasodsa</span>, <Button>Signed</Button>, <span className='currency-cell'><EthLogo /> Ether</span>, "$12312.88"],
  [moment(Date.now()).toString(), <span className='reciever-cell'>Sent to 08u1j212disaxsakxsakdl</span>, <Button>Signed</Button>, <span className='currency-cell'><FilLogo /> Filecoin</span>, "$98765.07"], 
  [moment(Date.now()).toString(), <span className='reciever-cell'>Sent to 0xiahdsa7d9sa8diasjdso</span>, <Button>Signed</Button>, <span className='currency-cell'><AlgoLogo /> Algorand</span>, "$52311.40"]
]


const { className } = props
  return (
    <div className='Coin'>
    <h3 className="Coin__title">
      <Trans i18nKey='coin.title' />
    </h3>
    <div className="Coin__coin-filters">
      <div className="Coin__coin-selection">
        <Label>
          <Trans i18nKey='coin.selectCoin' />
        </Label>
        <div className="Coin__coin-selection-select">

        <Select value={selectedToken || ""} onChange={(e) => setSelectedToken(e.target.value)} options={tokens.map(token => ({
          labelText: token.tokenName,
          value: token.tokenName
        }))}></Select>
      {selectedToken !== "All Coins"? (
        <div>
          Total $7836248.00
        </div>
      ) : null}
        </div>
      </div>


    </div>
      <div className="Coin__transactions-table">
        <TableWithPagination 
          highlightedRowIndexes={[]} 
          rowsPerPage={3} 
          rows={rows}
          headers={headers} />
      </div>
    </div>
  )
}

export default Coin