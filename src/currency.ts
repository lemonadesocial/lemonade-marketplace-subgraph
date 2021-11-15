import { Address } from '@graphprotocol/graph-ts';

import { Currency } from '../generated/schema'
import { ERC20 } from '../generated/LemonadeMarketplace/ERC20'

export function fetchCurrency(address: Address): Currency {
  let currencyID = address.toHex();
  let currency = Currency.load(currencyID)

  if (!currency) {
    let erc20 = ERC20.bind(address);
    let name = erc20.try_name();
    let symbol = erc20.try_symbol();

    currency = new Currency(currencyID);

    if (!name.reverted) {
      currency.name = name.value;
    }

    if (!symbol.reverted) {
      currency.symbol = symbol.value;
    }

    currency.save();
  }

  return currency;
}
