import { Address, Bytes } from '@graphprotocol/graph-ts';

import { IERC165 } from '../generated/IERC721Metadata/IERC165'
import { IERC721Metadata } from '../generated/IERC721Metadata/IERC721Metadata'
import { Registry } from '../generated/schema'

let IERC721InterfaceId = Bytes.fromHexString('80ac58cd');
let IERC721MetadataInterfaceId = Bytes.fromHexString('0x5b5e139f');
let IERC721RoyaltyInterfaceId = Bytes.fromHexString('0xe814cb71');

export function fetchRegistry(address: Address): Registry {
  let registryID = address.toHex();
  let registry = Registry.load(registryID)

  if (!registry) {
    let erc165 = IERC165.bind(address);
    let supportsERC721 = erc165.try_supportsInterface(IERC721InterfaceId as Bytes);

    registry = new Registry(registryID);
    registry.isERC721 = supportsERC721.reverted ? false : supportsERC721.value;

    if (registry.isERC721) {
      let erc721 = IERC721Metadata.bind(address)
      let name = erc721.try_name();
      let symbol = erc721.try_symbol();
      let supportsMetadata = erc165.try_supportsInterface(IERC721MetadataInterfaceId as Bytes);
      let supportsRoyalty = erc165.try_supportsInterface(IERC721RoyaltyInterfaceId as Bytes);

      if (!name.reverted) {
        registry.name = name.value;
      }

      if (!symbol.reverted) {
        registry.symbol = symbol.value;
      }

      if (!supportsMetadata.reverted) {
        registry.supportsMetadata = supportsMetadata.value;
      }

      if (!supportsRoyalty.reverted) {
        registry.supportsRoyalty = supportsRoyalty.value;
      }
    }

    registry.save();
  }

  return registry;
}
