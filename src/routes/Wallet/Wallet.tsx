import React, { useState } from 'react'
import { Button, ButtonGroup, Label, Select, TableWithPagination } from 'componentLib'
import { EthLogo, FlowLogo, TethLogo } from 'shared/logos'
import './Wallet.scss'
import { Link } from 'react-router-dom'


interface WalletsProps {
  className?: string
}

const Wallets: React.FC<WalletsProps> = (props) => {

  const ethWallet = {walletName: "ETH (cold)", description: "Ethereum cold wallet"};

  const [wallets] = useState([ethWallet])
  const [coins] = useState(["All coins"])

  const [selectedWallet, setSelectedWallet ] = useState(ethWallet.walletName)

  const [walletSelection, setWalletSelection] = useState("Cold Wallets")

  const [dummyTableMatrix] = useState([
    [<Link to={`/coin/${selectedWallet}?selectedToken=Ether`}><span className='currency-cell'> <EthLogo /> Ethereum</span></Link>, "232123.10 ETH", "$230233.98"],
    [<span className='currency-cell'> <FlowLogo /> ChainLink</span>, "12312.10 LNK", "$27382.34"],
    [<span className='currency-cell'> <TethLogo /> Tether</span>, "83724.10 USDT", "$9487.20"],
    [<span className='currency-cell'> <EthLogo /> Ethereum</span>, "232123.10 ETH", "$230233.98"],
    [<span className='currency-cell'> <FlowLogo /> ChainLink</span>, "12312.10 LNK", "$27382.34"],
    [<span className='currency-cell'> <TethLogo /> Tether</span>, "83724.10 USDT", "$9487.20"],
  ])

const { className } = props
  return (
    <div className='Wallets'>
      <h2 className="Wallets__title">Wallets</h2>
      <div className="Wallets__wallet-selection">
      {["Cold Wallets", "Self managed wallets"].map((buttonType, idx) => (
      <Button
        key={idx}
        onClick={() => setWalletSelection(buttonType)} 
        variant={walletSelection === buttonType? "primary" : "gray"}>{buttonType}</Button>
      ))}
      </div>
      <h3 className="Wallets__description">
        <span>
Seggregated wallets managed by Coinlist Custody for long term storage
        </span>
        <span>
          $123902183.12
        </span>
        
      </h3>
      <div className="Wallets__wallet-type-selection">
        <div className="Wallets__wallet-type-selection-option">
        <Label>
          Select Wallet
        </Label>
        <Select onChange={(e) => setSelectedWallet(e.target.value)} options={wallets.map(wallet => ({
          labelText: wallet.walletName,
          value: wallet.walletName
        }))}></Select>
        </div>
        <div className="Wallets__wallet-type-selection-option">
        <Label>
          Select Coin
        </Label>
        <Select options={coins.map(coin => ({
          labelText: coin,
          value: coin
        }))}></Select>
        </div>
      </div>

      <div className="Wallets__wallet-data">
        <div className="Wallets__selected-wallet">
          <div className="Wallets__selected-wallet-information">
            <div className="Wallets__selected-wallet-information-name">
              <Link to={`/coin/${selectedWallet}`}>
            {wallets.find(wallet => wallet.walletName === selectedWallet)?.walletName}
              </Link>
            </div>
            <div className="Wallets__selected-wallet-information-description">
            {wallets.find(wallet => wallet.walletName === selectedWallet)?.description}
            </div>
          </div>
          <div className="Wallets__selected-wallet-total-balance">
            $740281391.54  
          </div>
        </div>

      </div>

      <div className="Wallets__wallet-currency-table">
        <TableWithPagination highlightedRowIndexes={[]} rowsPerPage={3} rows={dummyTableMatrix} headers={["Coin/Token", "Amount", "Amount (fiat)"]} />
      </div>
    </div>
  )
}

export default Wallets