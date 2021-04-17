
import { OfferCreated, OfferWithdrawn, OfferAccepted } from '../generated/LemonadeMarketplace/LemonadeMarketplace';
import { Offer } from '../generated/schema'

export function handleOfferCreated(event: OfferCreated): void {
  let offer = new Offer(event.address.toHex() + '_' + event.params.offerId.toHex());
  offer.lastBlock = event.block.number;
  offer.createdAt = event.block.timestamp;
  offer.offerContract = event.address;
  offer.offerId = event.params.offerId;

  offer.active = true;
  offer.seller = event.params.seller;
  offer.currency = event.params.currency;
  offer.price = event.params.price;
  offer.tokenContract = event.params.tokenContract;
  offer.tokenId = event.params.tokenId;
  offer.save();
}

export function handleOfferWithdrawn(event: OfferWithdrawn): void {
  let offer = new Offer(event.address.toHex() + '_' + event.params.offerId.toHex());
  if (!offer) return;

  offer.lastBlock = event.block.number;

  offer.active = false;
  offer.save();
}

export function handleOfferAccepted(event: OfferAccepted): void {
  let offer = new Offer(event.address.toHex() + '_' + event.params.offerId.toHex());
  if (!offer) return;

  offer.lastBlock = event.block.number;

  offer.active = false;
  offer.buyer = event.params.buyer;
  offer.save();
}
