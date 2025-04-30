<!-- readme-start -->

<!-- readme-content-start -->

# braze-api

[![NPM](https://nodei.co/npm/braze-api.png)](https://nodei.co/npm/braze-api/)

[![NPM version](https://img.shields.io/npm/v/braze-api.svg)](https://www.npmjs.com/package/braze-api)
[![build](https://github.com/braze-community/braze-node/actions/workflows/build.yml/badge.svg)](https://github.com/braze-community/braze-node/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/braze-community/braze-node/branch/master/graph/badge.svg?token=QHPI1I0XI3)](https://codecov.io/gh/braze-community/braze-node)
[![NPM downloads](https://badgen.net/npm/dm/braze-api)](https://www.npmjs.com/package/braze-api)

Node.js library for [Braze](https://www.braze.com/). See [docs](https://braze-community.github.io/braze-node/) and [demo](https://replit.com/@remarkablemark/braze-api). The types are from [Braze's Postman collection](https://documenter.getpostman.com/view/4689407/SVYrsdsG).

## Quick Start

```ts
import { Braze } from 'braze-api'

const braze = new Braze('YOUR_API_URL', 'YOUR_API_KEY')

await braze.messages.send({
  external_user_ids: ['your_external_user_id'],
  messages: {
    email: {
      app_id: 'your_app_id',
      from: 'Company <company@example.com>',
      email_template_id: 'your_email_template_id',
    },
  },
})
```

## Documentation

- [TypeDoc](https://braze-community.github.io/braze-node/)
- [Braze API Guide](https://www.braze.com/docs/api/)
- [Braze's Postman collection](https://documenter.getpostman.com/view/4689407/SVYrsdsG)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Braze account](https://www.braze.com/get-started)

## Installation

[NPM](https://www.npmjs.com/package/braze-api):

```sh
npm install braze-api
```

[Yarn](https://yarnpkg.com/package/braze-api):

```sh
yarn add braze-api
```

## Usage

The package needs to be configured with your account's REST endpoint and API key:

```ts
const { Braze } = require('braze-api')

const braze = new Braze('YOUR_API_URL', 'YOUR_API_KEY')
```

The same can be done with ES Modules:

```ts
import { Braze } from 'braze-api'

const braze = new Braze('YOUR_API_URL', 'YOUR_API_KEY')
```

### API URL

Use the [REST endpoint](https://www.braze.com/docs/api/basics#endpoints) provisioned to your account when you log in to the dashboard:

| Instance | REST Endpoint                 |
| -------- | ----------------------------- |
| US-01    | https://rest.iad-01.braze.com |
| US-02    | https://rest.iad-02.braze.com |
| US-03    | https://rest.iad-03.braze.com |
| US-04    | https://rest.iad-04.braze.com |
| US-05    | https://rest.iad-05.braze.com |
| US-06    | https://rest.iad-06.braze.com |
| US-08    | https://rest.iad-08.braze.com |
| EU-01    | https://rest.fra-01.braze.eu  |
| EU-02    | https://rest.fra-02.braze.eu  |

### API Key

The [API key](https://www.braze.com/docs/api/basics#creating-and-managing-rest-api-keys) can be created in your Braze dashboard.

## API Methods

The library supports the following [Braze API endpoints](https://www.braze.com/docs/api/home). Pull requests are welcome!

### Campaigns

- [ ] /campaigns/data_series
- [x] /campaigns/details
- [x] /campaigns/list
- [ ] /sends/data_series

### Canvas

- [ ] /canvas/data_series
- [ ] /canvas/data_summary
- [ ] /canvas/details
- [x] /canvas/list

### Catalogs

- [ ] DELETE /catalogs/{catalog_name}/items
- [ ] PATCH /catalogs/{catalog_name}/items
- [ ] POST /catalogs/{catalog_name}/items
- [ ] PUT /catalogs/{catalog_name}/items/
- [ ] DELETE /catalogs/{catalog_name}/items/{item_id}
- [x] GET /catalogs/{catalog_name}/items/{item_id}
- [x] GET /catalogs/{catalog_name}/items
- [ ] PATCH /catalogs/{catalog_name}/items/{item_id}
- [ ] POST /catalogs/{catalog_name}/items/{item_id}
- [ ] PUT /catalogs/{catalog_name}/items/{item_id}
- [ ] DELETE /catalogs/{catalog_name}
- [x] GET /catalogs
- [ ] POST /catalogs

### Content Blocks

- [x] /content_blocks/list
- [x] /content_blocks/info
- [x] /content_blocks/create
- [x] /content_blocks/update

### Custom Events

- [ ] /events/list
- [ ] /events/data_series

### Email List

- [ ] /email/hard_bounces
- [ ] /email/unsubscribes
- [x] /email/blacklist
- [ ] /email/status
- [x] /email/bounce/remove
- [x] /email/spam/remove

### Email Templates

- [x] /templates/email/list
- [x] /templates/email/info
- [x] /templates/email/create
- [x] /templates/email/update

### KPI

- [ ] /kpi/new_users/data_series
- [ ] /kpi/dau/data_series
- [ ] /kpi/mau/data_series
- [ ] /kpi/uninstalls/data_series

### News Feed

- [ ] /feed/data_series
- [ ] /feed/details
- [ ] /feed/list

### Purchases

- [ ] /purchases/product_list
- [ ] /purchases/quantity_series
- [ ] /purchases/revenue_series

### Preference Center

- [ ] /preference_center/v1/{preferenceCenterExternalId}/url/{userId}
- [ ] /preference_center/v1/list
- [ ] /preference_center/v1/{preferenceCenterExternalId}
- [ ] /preference_center/v1
- [ ] /preference_center/v1/{preferenceCenterExternalId}

### Schedule Messages

- [x] /messages/scheduled_broadcasts
- [x] /messages/schedule/delete
- [x] /canvas/trigger/schedule/delete
- [x] /campaigns/trigger/schedule/delete
- [x] /messages/schedule/create
- [x] /campaigns/trigger/schedule/create
- [x] /messages/schedule/update
- [x] /campaigns/trigger/schedule/update
- [x] /canvas/trigger/schedule/create
- [x] /canvas/trigger/schedule/update

### SCIM

- [ ] DELETE /scim/v2/Users/{id}
- [ ] GET /scim/v2/Users?filter={userName@example.com}
- [ ] GET /scim/v2/Users/{id}
- [ ] POST /scim/v2/Users
- [ ] PUT /scim/v2/Users/{id}

### Segments

- [x] /segments/list
- [x] /segments/data_series
- [x] /segments/details

### Send Messages

- [x] /sends/id/create
- [x] /messages/send
- [x] /transactional/v1/campaigns/{{CAMPAIGN_ID}}/send
- [x] /campaigns/trigger/send
- [x] /canvas/trigger/send

### Sessions

- [ ] /sessions/data_series

### SMS

- [ ] /sms/invalid_phone_numbers
- [ ] /sms/invalid_phone_numbers/remove

### Subscription Groups

- [x] /subscription/status/get
- [x] /subscription/user/status
- [x] /subscription/status/set
- [x] /v2/subscription/status/set

### User Data

- [x] /users/export/global_control_group
- [x] /users/export/ids
- [x] /users/export/segment
- [x] /users/external_ids/remove
- [x] /users/external_ids/rename
- [x] /users/alias/new
- [x] /users/delete
- [x] /users/identify
- [x] /users/track
- [x] /users/alias/update
- [x] /users/merge

### Live Activity

- [ ] /messages/live_activity/update

## Contributing

Contributions are welcome! Check out the [guide](https://github.com/braze-community/braze-node/blob/master/.github/CONTRIBUTING.md). 👋

## License

[MIT](https://github.com/braze-community/braze-node/blob/master/LICENSE)

<!-- readme-content-end -->

<!-- readme-content-placeholder -->

<!-- readme-end -->
