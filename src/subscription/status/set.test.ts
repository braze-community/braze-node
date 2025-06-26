import { post, ServerResponse } from '../../common/request'
import { set } from '.'
import type { SubscriptionStatusSetObject } from './types'

jest.mock('../../common/request/post')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/subscription/status/set', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const data: ServerResponse = { message: 'success' }

  it('calls request for email with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    const body: SubscriptionStatusSetObject = {
      subscription_group_id: 'subscription_group_identifier',
      subscription_state: 'unsubscribed',
      external_id: ['external_identifier'],
      email: ['example1@email.com', 'example2@email.com'],
    }
    expect(await set(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/subscription/status/set`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })

  it('calls request for SMS with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    const body: SubscriptionStatusSetObject = {
      subscription_group_id: 'subscription_group_identifier',
      subscription_state: 'subscribed',
      external_id: ['external_identifier'],
      phone: ['+12223334444', '+11112223333'],
    }
    expect(await set(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toHaveBeenCalledWith(`${apiUrl}/subscription/status/set`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toHaveBeenCalledTimes(1)
  })
})
