import { post, ServerResponse } from '../../common/request'
import { send } from '.'
import type { CanvasTriggerSendObject } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/canvas/trigger/send', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CanvasTriggerSendObject = {
    canvas_id: 'canvas_identifier',
    canvas_entry_properties: { product_name: 'shoes', product_price: 79.99 },
    broadcast: false,
    audience: {
      AND: [
        {
          custom_attribute: {
            custom_attribute_name: 'eye_color',
            comparison: 'equals',
            value: 'blue',
          },
        },
        {
          custom_attribute: {
            custom_attribute_name: 'favorite_foods',
            comparison: 'includes_value',
            value: 'pizza',
          },
        },
        {
          OR: [
            {
              custom_attribute: {
                custom_attribute_name: 'last_purchase_time',
                comparison: 'less_than_x_days_ago',
                value: 2,
              },
            },
            {
              push_subscription_status: {
                comparison: 'is',
                value: 'opted_in',
              },
            },
          ],
        },
        {
          email_subscription_status: {
            comparison: 'is_not',
            value: 'subscribed',
          },
        },
        {
          last_used_app: {
            comparison: 'after',
            value: '2019-07-22T13:17:55+0000',
          },
        },
      ],
    },
    recipients: [
      {
        user_alias: {
          alias_name: 'example_name',
          alias_label: 'example_label',
        },
        external_user_id: 'user_identifier',
        canvas_entry_properties: {},
        send_to_existing_only: true,
        attributes: {
          first_name: 'Alex',
        },
      },
    ],
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await send(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/canvas/trigger/send`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
