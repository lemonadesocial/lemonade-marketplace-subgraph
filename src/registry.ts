import { Address, Bytes } from '@graphprotocol/graph-ts';

import { IERC165 } from '../generated/IERC721/IERC165'
import { Registry } from '../generated/schema'

let IERC721InterfaceId = Bytes.fromHexString('80ac58cd');

export function fetchRegistry(address: Address): Registry {
  let registryID = address.toHex();
  let registry = Registry.load(registryID)

  if (!registry) {
    let erc165 = IERC165.bind(address);
    let supportsERC721 = erc165.try_supportsInterface(IERC721InterfaceId as Bytes);

    registry = new Registry(registryID);
    registry.isERC721 = supportsERC721.reverted ? false : supportsERC721.value;
    registry.save();
  }

  return registry;
}
