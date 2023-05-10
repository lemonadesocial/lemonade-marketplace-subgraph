import { Address } from '@graphprotocol/graph-ts';

import { Registry } from '../generated/schema'

export function fetchRegistry(address: Address): Registry {
  let registryID = address.toHex();
  let registry = Registry.load(registryID)

  registry = new Registry(registryID);
  registry.isERC721 = true;
  registry.save();

  return registry;
}
