
import { ERC20 } from '../generated/LemonadeMarketplace/ERC20'
import { ERC721Metadata } from '../generated/LemonadeMarketplace/ERC721Metadata'
import { OrderCreated, OrderBid, OrderCancelled, OrderFilled } from '../generated/LemonadeMarketplace/LemonadeMarketplace';
import { Bid, Order } from '../generated/schema'

export function handleOrderCreated(event: OrderCreated): void {
  let currency = ERC20.bind(event.params.currency);
  let token = ERC721Metadata.bind(event.params.tokenContract);

  let order = new Order(event.address.toHex() + '-' + event.params.orderId.toHex());
  order.lastBlock = event.block.number;
  order.createdAt = event.block.timestamp;
  order.orderContract = event.address;
  order.orderId = event.params.orderId;

  switch (event.params.kind) {
    case 0:
      order.kind = 'Direct'; break;
    case 1:
      order.kind = 'Auction'; break;
  }

  order.open = true;

  if (event.params.openFrom) {
    order.openFrom = event.params.openFrom;
  }

  if (event.params.openTo) {
    order.openTo = event.params.openTo;
  }

  order.maker = event.params.maker;
  order.currencyContract = currency._address;
  order.currencyName = currency.name();
  order.currencySymbol = currency.symbol();
  order.price = event.params.price;
  order.tokenContract = token._address;
  order.tokenId = event.params.tokenId;
  order.tokenURI = token.tokenURI(event.params.tokenId);

  order.save();
}

export function handleOrderBid(event: OrderBid): void {
  let order = new Order(event.address.toHex() + '-' + event.params.orderId.toHex());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.bidder = event.params.bidder;
  order.bidAmount = event.params.bidAmount;

  order.save();

  let bid = new Bid(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
  bid.createdAt = event.block.timestamp;
  bid.order = order.id;

  bid.bidder = event.params.bidder;
  bid.bidAmount = event.params.bidAmount;

  bid.save();
}

export function handleOrderFilled(event: OrderFilled): void {
  let order = new Order(event.address.toHex() + '-' + event.params.orderId.toHex());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.open = false;
  order.taker = event.params.taker;
  order.paidAmount = event.params.paidAmount;

  order.save();
}

export function handleOrderCancelled(event: OrderCancelled): void {
  let order = new Order(event.address.toHex() + '-' + event.params.orderId.toHex());

  if (!order) return;

  order.lastBlock = event.block.number;

  order.open = false;

  order.save();
}
