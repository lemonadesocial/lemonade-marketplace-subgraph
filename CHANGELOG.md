# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
