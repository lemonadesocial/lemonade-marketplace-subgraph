# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.7.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.6.0...v3.7.0) (2022-06-22)


### Features

* add aurora testnet, aurora, bnb, and chapel chains ([5ab6a32](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/5ab6a32516367a285e28025e1ed10a8b7134ed18))

## [3.6.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.5.0...v3.6.0) (2022-06-03)


### Features

* add moonbase chain ([f172224](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/f172224b8d4d67ca9cab36033f27366fdfc20f30))
* add moonbeam chain ([578a4b4](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/578a4b400add641b155533cb01c1db76594b1dda))
* update demo subgraph to moonbeam chain ([a48699f](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/a48699f1217d9804393dffa64a32d31da3917532))

## [3.5.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.4.0...v3.5.0) (2022-04-14)


### Features

* add ethereum chain ([553248b](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/553248b6d92a802d36ead0de394232152add8050))
* rename mainnet to matic ([41f481a](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/41f481a75e508d5926d936292b7f2e8768a2fccf))
* rename testnet to mumbai ([37ce68d](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/37ce68d28dca54cd672763a7adb124a4f1b6990a))

## [3.4.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.3.0...v3.4.0) (2022-03-27)


### Features

* add rinkeby chain ([91ccbbf](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/91ccbbf0e9fe626d601b3416fb486e1fa5657427))
* allow manifest preparation without graft ([5cfeca0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/5cfeca0c1f2bbeb8668e1df96f9cce62051301ee))

## [3.3.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.2.0...v3.3.0) (2022-03-27)


### Features

* **token:** add updated at and updated transaction ([ad0c77c](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/ad0c77c143f6ff33afcc0f8f15e2d22dab318e26))
* update deployments ([56ce405](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/56ce40541f33ef0d5f763fbb677211e0ce90c8cc))

## [3.2.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.1.0...v3.2.0) (2022-01-20)


### Features

* **token:** use transaction from instead of transfer to as creator ([47bb6b5](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/47bb6b52221c45a6aa2547956959936cf6460260))

## [3.1.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v3.0.0...v3.1.0) (2021-12-01)


### Features

* index every LemonadeMarketplace regardless of address ([0b2b91b](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/0b2b91b748be3a754f575cec5331302f5e41d6f4))

## [3.0.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v2.0.0...v3.0.0) (2021-11-22)


### ⚠ BREAKING CHANGES

* **token:** remove token uri and royalty rpc calls

### Features

* **token:** remove token uri and royalty rpc calls ([552926c](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/552926ccc7f06c042991fe5d4a98b0d3389b0285))

## [2.0.0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/compare/v1.0.0...v2.0.0) (2021-11-18)


### ⚠ BREAKING CHANGES

* **registry:** add registry to track erc721 and metadata and royalty support

### Features

* **bid:** add transaction ([09d63bd](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/09d63bd184e2bcb9bc84192d3011170ccb7f58f2))
* **order:** add transaction ([9f7eff9](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/9f7eff92ec654d4d18b99bc5cc2d339c3f0521d9))
* **registry:** add registry to track erc721 and metadata and royalty support ([999ec52](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/999ec524213b7e11bc91c03ac7f020af39071559))
* **token:** add support for royalties ([47b8d38](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/47b8d387e2db01104b001e63c4e3bb39b2386f05))
* **transfer:** add transaction ([93467a0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/93467a014c5766c88c57465026368f7f0429e4e4))

## 1.0.0 (2021-11-02)


### Features

* add subgraph for LemonadeMarketplace ([f58094b](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/f58094b2551632c9e228f10b9645139ab3ded6cd))
* add support for bids and query ERC20 and ERC721 contracts when order is created ([55ffa2a](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/55ffa2af7341e24596c79b509f15f8049881d245))
* add support for transfers and add token and currency entity ([59fccf3](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/59fccf353af08bb97eda826ef2c5235b76257b6e))
* **order:** skip orders of unknown kind ([704e4f0](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/704e4f00637dd56f22372e213dbc44e07a204de7))
* upgrade project with latest The Graph structure ([8baed0f](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/8baed0f240572483766cfe2df535be4fd975a2d0))


### Bug Fixes

* **order:** fix openFrom and openTo always set by checking BigInt.isZero() ([e1f64bb](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/e1f64bb266725706fa34c53b1fa540480e357b7d))
* **order:** fix order cancel attempt to create order when nonexistent ([273416a](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/273416a76391fe3d7daa0a97b5fb7a08257ac7d3))
* **token:** fix maintaining the token owner ([360ff65](https://github.com/lemonadesocial/lemonade-marketplace-subgraph/commit/360ff658ebf8981dec02762e95c47e081eb401ad))
