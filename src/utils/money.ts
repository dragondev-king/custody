import accounting from 'accounting'

interface RailsMoney {
  fractional: string;
  currency: {
    subunit_to_unit: number;
    symbol: string;
  };
}

// Useful to format a rails money object
export const formatCryptoMoney = (amount: RailsMoney) => {
  const amountFractional =
    Number(amount.fractional) / amount.currency.subunit_to_unit

  return accounting.formatMoney(amountFractional, {
    symbol: amount.currency.symbol,
    format: '%v %s'
  })
}
