import { post, ServerResponse } from '../../../common/request'
import { create } from '.'
import type { CanvasTriggerScheduleCreateObject } from './types'

jest.mock('../../../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/canvas/trigger/schedule/create', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CanvasTriggerScheduleCreateObject = {
    canvas_id: 'canvas_identifier',
    recipients: [
      {
        user_alias: {
          alias_name: 'user_alias_name',
          alias_label: 'user_alias_label',
        },
        external_user_id: 'external_user_identifier',
        trigger_properties: {},
        canvas_entry_properties: {},
      },
    ],
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
    broadcast: false,
    canvas_entry_properties: {},
    schedule: {
      time: '',
      in_local_time: false,
      at_optimal_time: false,
    },
  }
  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await create(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/canvas/trigger/schedule/create`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
