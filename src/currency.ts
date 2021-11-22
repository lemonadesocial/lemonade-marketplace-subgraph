import { Address } from '@graphprotocol/graph-ts';

import { Currency } from '../generated/schema'
import { IERC20Metadata } from '../generated/LemonadeMarketplace/IERC20Metadata'

export function fetchCurrency(address: Address): Currency {
  let currencyID = address.toHex();
  let currency = Currency.load(currencyID)

  if (!currency) {
    let erc20Metadata = IERC20Metadata.bind(address);
    let name = erc20Metadata.try_name();
    let symbol = erc20Metadata.try_symbol();

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
