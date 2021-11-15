import { Address } from '@graphprotocol/graph-ts';

import { fetchCurrency } from './currency';

import { Bid, Order, Token, Transfer } from '../generated/schema'
import { IERC721Metadata, Transfer as TransferEvent } from '../generated/IERC721Metadata/IERC721Metadata'
import { IERC721Royalty } from '../generated/IERC721Metadata/IERC721Royalty'
import { OrderCreated, OrderBid, OrderCancelled, OrderFilled } from '../generated/LemonadeMarketplace/LemonadeMarketplace';

let ZERO_ADDRESS = Address.zero();

export function handleOrderCreated(event: OrderCreated): void {
  let currency = fetchCurrency(event.params.currency)

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
    default:
      return;
  }

  order.open = true;

  if (!event.params.openFrom.isZero()) {
    order.openFrom = event.params.openFrom;
  }

  if (!event.params.openTo.isZero()) {
    order.openTo = event.params.openTo;
  }

  order.maker = event.params.maker;
  order.currency = currency.id;
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
  let order = Order.load(event.address.toHex() + '-' + event.params.orderId.toString());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.open = false;
  order.save();
}

export function handleTransfer(event: TransferEvent): void {
  let tokenID = event.address.toHex() + '-' + event.params.tokenId.toString();
  let token = Token.load(tokenID);

  if (!token) {
    token = new Token(tokenID);
    token.contract = event.address;

    token.tokenId = event.params.tokenId;

    let tokenURI = IERC721Metadata.bind(event.address).try_tokenURI(event.params.tokenId);

    if (!tokenURI.reverted) {
      token.uri = tokenURI.value;
    }

    let royalty = IERC721Royalty.bind(event.address).try_royalty(event.params.tokenId);

    if (!royalty.reverted) {
      token.royaltyMaker = royalty.value.value0;
      token.royaltyFraction = royalty.value.value1;
    }
  }

  if (event.params.from.equals(ZERO_ADDRESS)) { // mint
    token.createdAt = event.block.timestamp;
    token.creator = event.params.to;
    token.owner = event.params.to;
  } else if (event.params.to.equals(ZERO_ADDRESS)) { // burn
    token.unset('owner');
  } else { // transfer
    token.owner = event.params.to;
  }

  token.save();

  let transfer = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  transfer.createdAt = event.block.timestamp;
  transfer.transaction = event.transaction.hash;

  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.token = token.id;
  transfer.save();
}
