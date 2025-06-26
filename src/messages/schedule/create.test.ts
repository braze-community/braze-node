import { post, ServerResponse } from '../../common/request'
import { create } from '.'
import type { MessagesScheduleCreateObject } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/messages/schedule/create', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const body: MessagesScheduleCreateObject = {
    broadcast: false,
    external_user_ids: ['external_user_identifiers'],
    user_aliases: [
      {
        alias_name: 'example_name',
        alias_label: 'example_label',
      },
    ],
    segment_id: 'segment_identifiers',
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
    campaign_id: 'campaign_identifier',
    send_id: 'send_identifier',
    override_messaging_limits: false,
    recipient_subscription_state: 'subscribed',
    schedule: {
      time: '',
      in_local_time: true,
      at_optimal_time: true,
    },
    messages: {},
  }

  const data: ServerResponse = { message: 'success' }

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await create(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/messages/schedule/create`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
