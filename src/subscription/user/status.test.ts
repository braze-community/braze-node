import { get, ServerResponse } from '../../common/request'
import { status } from '.'
import type { SubscriptionUserStatusObject } from './types'

jest.mock('../../common/request/get')
const mockedGet = jest.mocked(get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('subscription.user.status()', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const data: ServerResponse = { message: 'success' }

  it('calls GET /subscription/user/status for multiple users with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    const body: SubscriptionUserStatusObject = {
      external_id: ['1', '2'],
    }
    expect(await status(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/subscription/user/status?external_id=1&external_id=2`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedGet).toBeCalledTimes(1)
  })

  it('calls GET /subscription/user/status for email with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    const body: SubscriptionUserStatusObject = {
      external_id: 'external_id',
      email: 'example@braze.com',
      limit: 100,
      offset: 1,
    }
    expect(await status(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/subscription/user/status?external_id=external_id&email=example%40braze.com&limit=100&offset=1`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    expect(mockedGet).toBeCalledTimes(1)
  })

  it('calls GET /subscription/user/status for SMS with url and body', async () => {
    mockedGet.mockResolvedValueOnce(data)
    const body: SubscriptionUserStatusObject = {
      external_id: 'external_id',
      phone: '+11112223333',
      limit: 100,
      offset: 1,
    }
    expect(await status(apiUrl, apiKey, body)).toBe(data)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/subscription/user/status?external_id=external_id&phone=%2B11112223333&limit=100&offset=1`,
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
