import { Address } from "@graphprotocol/graph-ts";

import { Bid, Currency, Order, Token, Transfer } from '../generated/schema'
import { ERC20 } from '../generated/LemonadeMarketplace/ERC20'
import { ERC721Metadata, Transfer as TransferEvent } from '../generated/ERC721Metadata/ERC721Metadata'
import { OrderCreated, OrderBid, OrderCancelled, OrderFilled } from '../generated/LemonadeMarketplace/LemonadeMarketplace';

let ZERO_ADDRESS = Address.fromHexString('0x0000000000000000000000000000000000000000');

export function handleOrderCreated(event: OrderCreated): void {
  let currencyID = event.params.currency.toHex();

  if (!Currency.load(currencyID)) {
    let erc20 = ERC20.bind(event.params.currency);

    let currency = new Currency(currencyID);
    currency.name = erc20.name();
    currency.symbol = erc20.symbol();
    currency.save();
  }

  let order = new Order(event.address.toHex() + '-' + event.params.orderId.toString());
  order.lastBlock = event.block.number;

  order.contract = event.address;
  order.orderId = event.params.orderId;
  order.createdAt = event.block.timestamp;

  switch (event.params.kind) {
    case 0:
      order.kind = 'DIRECT'; break;
    case 1:
      order.kind = 'AUCTION'; break;
  }

  order.open = true;

  if (!event.params.openFrom.isZero()) {
    order.openFrom = event.params.openFrom;
  }

  if (!event.params.openTo.isZero()) {
    order.openTo = event.params.openTo;
  }

  order.maker = event.params.maker;
  order.currency = currencyID;
  order.price = event.params.price;
  order.token = event.params.tokenContract.toHex() + '-' + event.params.tokenId.toString();
  order.save();
}

export function handleOrderBid(event: OrderBid): void {
  let order = Order.load(event.address.toHex() + '-' + event.params.orderId.toString());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.bidder = event.params.bidder;
  order.bidAmount = event.params.bidAmount;
  order.save();

  let bid = new Bid(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  bid.order = order.id;
  bid.createdAt = event.block.timestamp;

  bid.bidder = event.params.bidder;
  bid.bidAmount = event.params.bidAmount;
  bid.save();
}

export function handleOrderFilled(event: OrderFilled): void {
  let order = Order.load(event.address.toHex() + '-' + event.params.orderId.toString());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.open = false;
  order.taker = event.params.taker;
  order.paidAmount = event.params.paidAmount;
  order.save();
}

export function handleOrderCancelled(event: OrderCancelled): void {
  let order = new Order(event.address.toHex() + '-' + event.params.orderId.toString());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.open = false;
  order.save();
}

export function handleTransfer(event: TransferEvent): void {
  let tokenID = event.address.toHex() + '-' + event.params.tokenId.toString();
  let token = Token.load(tokenID);

  if (!token) {
    let tokenURI = ERC721Metadata.bind(event.address).try_tokenURI(event.params.tokenId);

    if (tokenURI.reverted) return;

    token = new Token(tokenID);
    token.contract = event.address;

    token.tokenId = event.params.tokenId;
    token.uri = tokenURI.value;
  }

  if (event.params.from.equals(ZERO_ADDRESS)) {
    token.createdAt = event.block.timestamp;
    token.creator = event.params.to;
    token.owner = event.params.to;
  } else if (event.params.to.equals(ZERO_ADDRESS)) {
    token.unset('owner');
  }

  token.save();

  let transfer = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  transfer.createdAt = event.block.timestamp;

  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.token = token.id;
  transfer.save();
}
