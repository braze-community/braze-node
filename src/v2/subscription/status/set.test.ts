import { post, ServerResponse } from '../../../common/request'
import { set } from '.'
import type { V2SubscriptionStatusSetObject } from './types'

jest.mock('../../../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/v2/subscription/status/set', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const data: ServerResponse = { message: 'success' }

  it('calls request for email and SMS with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    const body: V2SubscriptionStatusSetObject = {
      subscription_groups: [
        {
          subscription_group_id: 'subscription_group_identifier',
          subscription_state: 'subscribed',
          external_ids: ['example-user', 'example1@email.com'],
        },
        {
          subscription_group_id: 'subscription_group_identifier',
          subscription_state: 'subscribed',
          external_ids: ['example-user', 'example1@email.com'],
        },
      ],
    }
    expect(await set(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/v2/subscription/status/set`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })

  it('calls request for email with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    const body: V2SubscriptionStatusSetObject = {
      subscription_groups: [
        {
          subscription_group_id: 'subscription_group_identifier',
          subscription_state: 'subscribed',
          emails: ['example1@email.com', 'example2@email.com'],
        },
      ],
    }
    expect(await set(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/v2/subscription/status/set`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })

  it('calls request for SMS with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    const body: V2SubscriptionStatusSetObject = {
      subscription_groups: [
        {
          subscription_group_id: 'subscription_group_identifier',
          subscription_state: 'subscribed',
          phones: ['+12223334444', '+15556667777'],
        },
      ],
    }
    expect(await set(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/v2/subscription/status/set`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
