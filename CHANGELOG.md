# Changelog

## [2.6.0](https://github.com/braze-community/braze-node/compare/v2.5.6...v2.6.0) (2024-02-09)


### Features

* user data endpoint /users/alias/update implementation ([368e9aa](https://github.com/braze-community/braze-node/commit/368e9aa31dd3d63627d0c2fffb81212360926d76))

## [2.5.6](https://github.com/braze-community/braze-node/compare/v2.5.5...v2.5.6) (2023-10-06)


### Bug Fixes

* add missing field in users/export/ids ([db9d43a](https://github.com/braze-community/braze-node/commit/db9d43a2dc1c582458a2cbef2bfeb604781fa781))

## [2.5.5](https://github.com/braze-community/braze-node/compare/v2.5.4...v2.5.5) (2023-09-26)


### Build System

* **package:** bump @types/node-fetch from 2.6.4 to 2.6.6 ([c9fbf96](https://github.com/braze-community/braze-node/commit/c9fbf968649ab97d3794a44f25dc0bebb1571c63))

## [2.5.4](https://github.com/braze-community/braze-node/compare/v2.5.3...v2.5.4) (2023-08-26)


### Build System

* **deps:** bump node-fetch from 2.6.13 to 2.7.0 ([#359](https://github.com/braze-community/braze-node/issues/359)) ([7fcd106](https://github.com/braze-community/braze-node/commit/7fcd1064d318d76da7a07e4ca14f68fe4e49213d))

## [2.5.3](https://github.com/braze-community/braze-node/compare/v2.5.2...v2.5.3) (2023-08-22)


### Build System

* **deps:** bump node-fetch from 2.6.12 to 2.6.13 ([#351](https://github.com/braze-community/braze-node/issues/351)) ([66a910f](https://github.com/braze-community/braze-node/commit/66a910f6df5fc2b506a3f23b2d2856ce18bcb5a6))

## [2.5.2](https://github.com/braze-community/braze-node/compare/v2.5.1...v2.5.2) (2023-08-05)


### Documentation

* change organization and repository name ([329372d](https://github.com/braze-community/braze-node/commit/329372d40f989a3c11b7bafdbfea5d4b16362c69))

## [2.5.1](https://github.com/braze-community/braze-node/compare/v2.5.0...v2.5.1) (2023-08-02)

### Bug Fixes

- **buildParams:** use brackets for arrays ([f66d284](https://github.com/braze-community/braze-node/commit/f66d2847bfdb09673cfe62564fdfbbcc816cc63d))
- **subscription/user/status:** set correct return type ([21a88d6](https://github.com/braze-community/braze-node/commit/21a88d612d9b56fdaaf1d58c331769cb060904b2))

## [2.5.0](https://github.com/braze-community/braze-node/compare/v2.4.1...v2.5.0) (2023-07-31)

### Features

- **campaigns:** add `campaigns.list` (GET /campaigns/list) ([75edaf5](https://github.com/braze-community/braze-node/commit/75edaf550f41e2a1a94206785531b1c8498e01de))

## [2.4.1](https://github.com/braze-community/braze-node/compare/v2.4.0...v2.4.1) (2023-07-30)

### Bug Fixes

- **messages:** fix GET /messages/scheduled_broadcasts ([9ba55b5](https://github.com/braze-community/braze-node/commit/9ba55b5af7a866c2e1b7db0eccf893cd52ba5525))
- **subscription:** fix GET /subscription/user/status ([67cb4c0](https://github.com/braze-community/braze-node/commit/67cb4c0b900f87d7938d499bc6276b0c3e307c3e))

## [2.4.0](https://github.com/braze-community/braze-node/compare/v2.3.1...v2.4.0) (2023-07-29)

### Features

- **types:** export types ([86d85ae](https://github.com/braze-community/braze-node/commit/86d85ae0220995b054a8b20e8bfbf5b3c6a7054f))

## [2.3.1](https://github.com/braze-community/braze-node/compare/v2.3.0...v2.3.1) (2023-07-29)

### Documentation

- **readme:** check off recently added API methods ([59501df](https://github.com/braze-community/braze-node/commit/59501df6640401e7a79f24f5c61bf15947615007))

## [2.3.0](https://github.com/braze-community/braze-node/compare/v2.2.2...v2.3.0) (2023-07-27)

### Features

- **email-templates:** add list, get, create and update ([f65b0d4](https://github.com/braze-community/braze-node/commit/f65b0d4a42b21de71401a47b52ec69e30022d571))

## [2.2.2](https://github.com/braze-community/braze-node/compare/v2.2.1...v2.2.2) (2023-07-18)

### Bug Fixes

- **package:** fix "module" field in package.json ([efc54f8](https://github.com/braze-community/braze-node/commit/efc54f84568b81a70f7c7e9cb3af0ed973daf6df))

## [2.2.1](https://github.com/braze-community/braze-node/compare/v2.2.0...v2.2.1) (2023-06-30)

### Build System

- **deps:** bump node-fetch and @types/node-fetch ([#288](https://github.com/braze-community/braze-node/issues/288)) ([355feaf](https://github.com/braze-community/braze-node/commit/355feafd9ab1a25dd9062735d93b7f1c54969457))

## [2.2.0](https://github.com/braze-community/braze-node/compare/v2.1.1...v2.2.0) (2023-06-23)

### Features

- allow calls to /users/merge endpoint ([dc07e48](https://github.com/braze-community/braze-node/commit/dc07e48ad22241f724a6f0d5f0e503576cfc1afb))

## [2.1.1](https://github.com/braze-community/braze-node/compare/v2.1.0...v2.1.1) (2023-06-21)

### Bug Fixes

- subscription.status.get pass undefined body instead of empty object ([e73d1b1](https://github.com/braze-community/braze-node/commit/e73d1b1f4b3dec8a45a7272e70b35143016eb25a))

## [2.1.0](https://github.com/braze-community/braze-node/compare/v2.0.1...v2.1.0) (2023-06-16)

### Features

- **module:** add ECMAScript modules (ESM) support ([e8eebac](https://github.com/braze-community/braze-node/commit/e8eebac6ea358d8e08a6495fb1f038b2b445bc5f))

## [2.0.1](https://github.com/braze-community/braze-node/compare/v2.0.0...v2.0.1) (2023-04-20)

### Bug Fixes

- correct typing of users track returned errors ([3ebb2bb](https://github.com/braze-community/braze-node/commit/3ebb2bb38da02bc75141b0322a56f2381125ad47))

## [2.0.0](https://github.com/braze-community/braze-node/compare/v1.32.0...v2.0.0) (2023-03-29)

### ⚠ BREAKING CHANGES

- **catalog list items:** catalogs.synchronous.items now returns a generator instead of an array

### Features

- **catalog list items:** return generator instead of array ([3a847bd](https://github.com/braze-community/braze-node/commit/3a847bd97af8925cc98561cf9798a0a08a2bc591))

### Bug Fixes

- **catalog items:** add pagination ([b29081b](https://github.com/braze-community/braze-node/commit/b29081bdca34e16e77b5837110683e0797c13e84))

## [1.32.0](https://github.com/braze-community/braze-node/compare/v1.31.0...v1.32.0) (2023-03-27)

### Features

- **catalogs:** add a few catalog listing endpoints ([ca39474](https://github.com/braze-community/braze-node/commit/ca39474a6b43b8ea1df6660e6620a872ef6ccf8b))

## [1.31.0](https://github.com/braze-community/braze-node/compare/v1.30.0...v1.31.0) (2023-03-23)

### Features

- **content blocks:** add list and get ([ef2e2fe](https://github.com/braze-community/braze-node/commit/ef2e2fe4f946d50c3677f010998492a85aed63e1))

## [1.30.0](https://github.com/braze-community/braze-node/compare/v1.29.0...v1.30.0) (2022-09-10)

### Features

- add email spam remove ([a53a6a9](https://github.com/braze-community/braze-node/commit/a53a6a96a324a9ecf36636d4342284036500aa56))

## [1.29.0](https://github.com/braze-community/braze-node/compare/v1.28.0...v1.29.0) (2022-09-05)

### Features

- add email bounce remove ([2f3f812](https://github.com/braze-community/braze-node/commit/2f3f812815acd2f94f4ca42a0a838e4b133134e8))

## [1.28.0](https://github.com/braze-community/braze-node/compare/v1.27.0...v1.28.0) (2022-09-04)

### Features

- add email blacklist ([989e9bd](https://github.com/braze-community/braze-node/commit/989e9bd2d34f7bf137be699ead248bedfb261b46))

## [1.27.0](https://github.com/braze-community/braze-node/compare/v1.26.0...v1.27.0) (2022-09-02)

### Features

- add subscription user status ([f1c8a6a](https://github.com/braze-community/braze-node/commit/f1c8a6a59c045db7d167ecda6d4647636fd7d017))

## [1.26.0](https://github.com/braze-community/braze-node/compare/v1.25.0...v1.26.0) (2022-08-28)

### Features

- add subscription status get ([558bb68](https://github.com/braze-community/braze-node/commit/558bb68cda5058822de75698ae780f2dad53a0cd))

## [1.25.0](https://github.com/braze-community/braze-node/compare/v1.24.0...v1.25.0) (2022-08-22)

### Features

- add v2 subscription status set ([0989e12](https://github.com/braze-community/braze-node/commit/0989e124bd85047393c0d6ed36d111f39434c5a4))

## [1.24.0](https://github.com/braze-community/braze-node/compare/v1.23.0...v1.24.0) (2022-08-21)

### Features

- add subscription status set ([566afb0](https://github.com/braze-community/braze-node/commit/566afb00d2e331c5032d973192ab226a00f623b7))

## [1.23.0](https://github.com/braze-community/braze-node/compare/v1.22.0...v1.23.0) (2022-08-21)

### Features

- add messages scheduled_broadcasts ([38eddf2](https://github.com/braze-community/braze-node/commit/38eddf2b07ce23d8feca7745bc6448509ffeabf1))

## [1.22.0](https://github.com/braze-community/braze-node/compare/v1.21.0...v1.22.0) (2022-08-21)

### Features

- add messages schedule update ([52b67bb](https://github.com/braze-community/braze-node/commit/52b67bb62120235ba2ce30db6f892e047f6b6199))

## [1.21.0](https://github.com/braze-community/braze-node/compare/v1.20.0...v1.21.0) (2022-08-20)

### Features

- add messages schedule delete ([881b9c1](https://github.com/braze-community/braze-node/commit/881b9c12c2877d251a8cc193959684526d529e9a))

## [1.20.0](https://github.com/braze-community/braze-node/compare/v1.19.0...v1.20.0) (2022-08-20)

### Features

- add messages schedule create ([d3c4fd8](https://github.com/braze-community/braze-node/commit/d3c4fd8d386d3b917d66cab9cff4aa8b0e18e551))

## [1.19.0](https://github.com/braze-community/braze-node/compare/v1.18.0...v1.19.0) (2022-08-16)

### Features

- add canvas trigger schedule update ([45de80b](https://github.com/braze-community/braze-node/commit/45de80bdb8b714f9d91cb56c03c7d478a9e14d69))

## [1.18.0](https://github.com/braze-community/braze-node/compare/v1.17.0...v1.18.0) (2022-08-15)

### Features

- add canvas trigger schedule delete ([efb6522](https://github.com/braze-community/braze-node/commit/efb6522e5e8c24add6c52d847935070a4f4a4fdf))

## [1.17.0](https://github.com/braze-community/braze-node/compare/v1.16.0...v1.17.0) (2022-08-14)

### Features

- add canvas trigger schedule create ([84585a6](https://github.com/braze-community/braze-node/commit/84585a6c18440478ee4cda4375c7d5f8542127e0))

## [1.16.0](https://github.com/braze-community/braze-node/compare/v1.15.0...v1.16.0) (2022-08-14)

### Features

- add campaigns trigger schedule update ([5029418](https://github.com/braze-community/braze-node/commit/50294189342e8c2877b363a35a811813a8476bee))

## [1.15.0](https://github.com/braze-community/braze-node/compare/v1.14.0...v1.15.0) (2022-08-14)

### Features

- add campaigns trigger schedule delete ([0339cbb](https://github.com/braze-community/braze-node/commit/0339cbb5158ade6bb6d0d73f7900ef9c3cf51064))

## [1.14.0](https://github.com/braze-community/braze-node/compare/v1.13.0...v1.14.0) (2022-08-13)

### Features

- add campaigns trigger schedule create ([a5d3972](https://github.com/braze-community/braze-node/commit/a5d3972db64599922dd97ac01ab00993fe173088))

## [1.13.0](https://github.com/braze-community/braze-node/compare/v1.12.0...v1.13.0) (2022-08-13)

### Features

- add users export Global Control Group ([cc6947b](https://github.com/braze-community/braze-node/commit/cc6947bd10193b45e06f90935d20aeeafbd6dc77))

## [1.12.0](https://github.com/braze-community/braze-node/compare/v1.11.0...v1.12.0) (2022-08-09)

### Features

- add users export segment ([b1e0fd5](https://github.com/braze-community/braze-node/commit/b1e0fd58f81597f43082e489a55453ebf65b5780))

## [1.11.0](https://github.com/braze-community/braze-node/compare/v1.10.0...v1.11.0) (2022-08-07)

### Features

- add users export ids ([e22be59](https://github.com/braze-community/braze-node/commit/e22be59df186df6efc76d9c13f3c9e05b693e883))

## [1.10.0](https://github.com/braze-community/braze-node/compare/v1.9.0...v1.10.0) (2022-08-07)

### Features

- add users external_ids remove ([dcb8408](https://github.com/braze-community/braze-node/commit/dcb8408385e1df16c5c5cb95b26bda12fa9426b2))

## [1.9.0](https://github.com/braze-community/braze-node/compare/v1.8.0...v1.9.0) (2022-08-06)

### Features

- add users external_ids rename ([0341e52](https://github.com/braze-community/braze-node/commit/0341e52c569eaf8cd77a7db82c007ca54db1c66d))

## [1.8.0](https://github.com/braze-community/braze-node/compare/v1.7.0...v1.8.0) (2022-08-03)

### Features

- add sends id create ([73b60d6](https://github.com/braze-community/braze-node/commit/73b60d68f78cf245b56e55a307035fe93e61901f))

## [1.7.0](https://github.com/braze-community/braze-node/compare/v1.6.0...v1.7.0) (2022-08-01)

### Features

- add canvas trigger send ([3cf3725](https://github.com/braze-community/braze-node/commit/3cf37256a2f1a104c11a0a54041893dd7cd7d4e0))

## [1.6.0](https://github.com/braze-community/braze-node/compare/v1.5.0...v1.6.0) (2022-07-31)

### Features

- add users delete ([9095dd0](https://github.com/braze-community/braze-node/commit/9095dd0db4d8fc75e8d514f99fc85bc7005d1cab))

## [1.5.0](https://github.com/braze-community/braze-node/compare/v1.4.0...v1.5.0) (2022-07-31)

### Features

- add users alias new ([f67af70](https://github.com/braze-community/braze-node/commit/f67af70e1b240eecd025b0fce8df28c29817e73c))

## [1.4.0](https://github.com/braze-community/braze-node/compare/v1.3.0...v1.4.0) (2022-07-31)

### Features

- add users identify ([8b4a1f8](https://github.com/braze-community/braze-node/commit/8b4a1f8aa2ddc1f22212d06907df72eb52dba652))

## [1.3.0](https://github.com/braze-community/braze-node/compare/v1.2.0...v1.3.0) (2022-07-21)

### Features

- add user track ([d785dc4](https://github.com/braze-community/braze-node/commit/d785dc40845b36db660a0c191218bd88a3850d74)), closes [#8](https://github.com/braze-community/braze-node/issues/8)

## [1.2.0](https://github.com/braze-community/braze-node/compare/v1.1.0...v1.2.0) (2022-07-10)

### Features

- add Braze transactional campaigns send ([3346562](https://github.com/braze-community/braze-node/commit/33465626788bf7e24434bb6603459fb63c39014b))

## [1.1.0](https://github.com/braze-community/braze-node/compare/v1.0.1...v1.1.0) (2022-07-05)

### Features

- add Braze campaigns trigger send ([01d8e49](https://github.com/braze-community/braze-node/commit/01d8e4921a8157597a5c4537e4ce225205d003c4))

## [1.0.1](https://github.com/braze-community/braze-node/compare/v1.0.0...v1.0.1) (2022-07-04)

### Documentation

- fix README.md ([435cfd0](https://github.com/braze-community/braze-node/commit/435cfd029a1132c2301b458ff96c3ea20982e04a))

## 1.0.0 (2022-07-04)

### Features

- add Braze messages send ([1b6c80d](https://github.com/braze-community/braze-node/commit/1b6c80d93475799e5ebc2e328319079656ef7c29))
