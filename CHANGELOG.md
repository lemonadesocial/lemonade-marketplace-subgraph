# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2021-11-02)


### Features

* add subgraph for LemonadeMarketplace ([7dab3b5](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/7dab3b5e19f7398b46dcd45c03e63e853da8054a))
* add support for bids and query ERC20 and ERC721 contracts when order is created ([8a04e1a](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/8a04e1a2889a4792413eda59b21930f193ba6efc))
* add support for transfers and add token and currency entity ([617e81b](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/617e81b1af85526a5310dc1a45efe8f6de200a15))
* **order:** skip orders of unknown kind ([7501a29](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/7501a291c397238bced300386dc31ec8a21590ba))
* upgrade project with latest The Graph structure ([5870fa4](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/5870fa4bc8f9f6e05966bdf4dbe408de7a12b373))


### Bug Fixes

* **order:** fix openFrom and openTo always set by checking BigInt.isZero() ([b90fdd7](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/b90fdd7b6fcb3713fd16c31d9db0fc10706829cb))
* **order:** fix order cancel attempt to create order when nonexistent ([0cdee6e](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/0cdee6e97f58a89156c7bbdce21feda5b5d0586f))
* **token:** fix maintaining the token owner ([5c9352d](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/5c9352dcb70f966c1678e3e4ef9f495e576118b8))
