import { Address, Bytes } from '@graphprotocol/graph-ts';

import { IERC165 } from '../generated/IERC721/IERC165'
import { Registry } from '../generated/schema'

function interfaceId(address: string): Bytes {
  if (address.startsWith('0x17c4e6453cc49aaaaeaca894e6d9683e')) return Bytes.fromHexString('58800161');

  return Bytes.fromHexString('80ac58cd');
}

export function fetchRegistry(address: Address): Registry {
  let registryID = address.toHex();
  let registry = Registry.load(registryID)

  if (!registry) {
    let erc165 = IERC165.bind(address);
    let supportsERC721 = erc165.try_supportsInterface(interfaceId(registryID));

    registry = new Registry(registryID);
    registry.isERC721 = supportsERC721.reverted ? false : supportsERC721.value;
    registry.save();
  }

  return registry;
}
