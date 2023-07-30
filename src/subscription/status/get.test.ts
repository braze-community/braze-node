import { get as _get, ServerResponse } from '../../common/request'
import { get } from '.'
import type { SubscriptionStatusGetObject } from './types'

jest.mock('../../common/request/get')
const mockedGet = jest.mocked(_get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/subscription/status/get', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const data: ServerResponse = { message: 'success' }

  it('calls request for multiple users with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    const body: SubscriptionStatusGetObject = {
      subscription_group_id: 'subscription_group_id',
      external_id: ['1', '2'],
    }
    expect(await get(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&external_id=1&external_id=2`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedGet).toBeCalledTimes(1)
  })

  it('calls request for email with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    const body: SubscriptionStatusGetObject = {
      subscription_group_id: 'subscription_group_id',
      email: 'example@braze.com',
    }
    expect(await get(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&email=example%40braze.com`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedGet).toBeCalledTimes(1)
  })

  it('calls request for SMS with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    const body: SubscriptionStatusGetObject = {
      subscription_group_id: 'subscription_group_id',
      phone: '+11112223333',
    }
    expect(await get(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/subscription/status/get?subscription_group_id=subscription_group_id&phone=%2B11112223333`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedGet).toBeCalledTimes(1)
  })
})
